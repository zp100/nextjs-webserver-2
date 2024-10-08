import Image from 'next/image'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import youtunePlaceholder from '../_assets/YouTune_placeholder.png'
import { YoutuneTrack } from '../page'

export default function TrackVideo({ default_volume, track, videoTime }: {
    default_volume: number,
    track?: YoutuneTrack,
    videoTime?: (_duration_time: number, _elapsed_time: number) => void,
}): React.ReactNode {
    const [ video_volume, set_video_volume ] = useState<number>(default_volume)
    const player_ref = useRef<ReactPlayer>(null)

    let video: React.ReactNode
    if (track !== undefined) {
        const url = parse_url(track.url)
        const volume = parse_volume(track.volume)
        const start_time = parse_time(track.start_time)
        const fade_in_sec = parse_time(track.fade_in_sec)
        const fade_out_sec = parse_time(track.fade_out_sec)
        const end_time = parse_time(track.end_time)

        const onVideoProgress = (): void => {
            if (!player_ref.current) {
                return
            }
            const player = player_ref.current

            const base_volume = volume ?? default_volume
            const current_time = player.getCurrentTime()
            const min_time = start_time ?? 0
            const max_time = end_time ?? player.getDuration()

            if (fade_in_sec !== undefined && current_time < min_time + fade_in_sec) {
                set_video_volume(base_volume * ((current_time - min_time) / fade_in_sec))
            } else if (fade_out_sec !== undefined && current_time > max_time - fade_out_sec) {
                set_video_volume(base_volume * ((max_time - current_time) / fade_out_sec))
            } else if (video_volume !== base_volume) {
                set_video_volume(base_volume)
            }

            videoTime?.(
                Math.floor(max_time - min_time),
                Math.floor(current_time - min_time),
            )
        }

        video = <>
            <ReactPlayer
                ref={player_ref}
                url={url}
                width="100%"
                height="100%"
                progressInterval={100}
                volume={video_volume / 100}
                config={{
                    playerVars: {
                        start: start_time,
                        end: end_time,
                    },
                }}
                controls
                playing
                onProgress={() => onVideoProgress()}
            />
        </>
    } else {
        video = <>
            <Image
                src={youtunePlaceholder}
                alt="YouTune logo placeholder"
                className="w-min h-full p-4"
            />
        </>
    }

    return <>
        <div className="h-36 flex justify-center">
            {video}
        </div>
    </>
}

function parse_url(url: string): string {
    const video_id = url
        .split('/')                 // split based on URL path
        .at(-1)                     // get last item (query params)
        ?.replace('watch?v=', '')   // remove "watch" part, if needed
        .split(/[?&]/)              // split based on query params
        .at(0)                      // get first item (video ID)

    return `https://www.youtube.com/watch?v=${video_id}`
}

function parse_volume(volume_string: string): number | undefined {
    if (volume_string === '') {
        return undefined
    }

    const volume = Number(volume_string)
    if (Number.isNaN(volume)) {
        return undefined
    }
    return volume
}

function parse_time(time_string: string): number | undefined {
    if (time_string === '') {
        return undefined
    }

    const split_list = time_string.split(':')
    let seconds = 0
    switch (split_list.length) {
        case 3:
            seconds += Number(split_list.at(-3)) * 3600
        case 2:
            seconds += Number(split_list.at(-2)) * 60
        case 1:
            seconds += Number(split_list.at(-1))

            break

        default:
            return undefined
    }

    if (Number.isNaN(seconds)) {
        return undefined
    }
    return seconds
}
