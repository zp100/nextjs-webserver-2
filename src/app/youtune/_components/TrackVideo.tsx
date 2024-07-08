'use client'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import youtunePlaceholder from '../_assets/YouTune_placeholder.png'
import { YoutuneTrack } from '../page'

// DEBUG
const DEFAULT_VOLUME = 0.5

export default function TrackVideo({ track }: {
    track?: YoutuneTrack
}): React.ReactNode {
    const player_ref = React.useRef<ReactPlayer>(null)

    let video: React.ReactNode
    if (track !== undefined) {
        const url = parse_url(track.url)
        const volume = parse_volume(track.volume) ?? DEFAULT_VOLUME
        const start_sec = parse_time(track.start_time)
        const end_sec = parse_time(track.end_time)

        video = <>
            <ReactPlayer
                ref={player_ref}
                url={url}
                width="100%"
                height="100%"
                progressInterval={100}
                volume={volume}
                config={{
                    playerVars: {
                        start: start_sec,
                        end: end_sec,
                    },
                }}
                controls
                playing
                onReady={() => ready_callback(player_ref, track)}
                onProgress={() => progress_callback(player_ref, track)}
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

function ready_callback(player_ref: React.RefObject<ReactPlayer>, track: YoutuneTrack): void {

}

function progress_callback(player_ref: React.RefObject<ReactPlayer>, track: YoutuneTrack): void {

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

    const volume = Number(volume_string) / 100
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
