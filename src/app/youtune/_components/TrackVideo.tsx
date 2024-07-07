'use client'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import youtunePlaceholder from '../_assets/YouTune_placeholder.png'
import { YoutuneTrack } from '../page'

export default function TrackVideo({ track }: {
    track?: YoutuneTrack
}): React.ReactNode {
    const player_ref = React.useRef<ReactPlayer>(null)
    let video: React.ReactNode
    if (track !== undefined) {
        video = <>
            <ReactPlayer
                ref={player_ref}
                url={parse_url(track.url)}
                width="100%"
                height="100%"
                progressInterval={100}
                controls
                playing
                onReady={() => {
                    const start_sec = parse_time(track.start_time)
                    if (!Number.isNaN(start_sec)) {
                        player_ref.current?.seekTo(start_sec, 'seconds')
                    }
                }}
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

function parse_url(url: string) {
    const video_id = url
        .split('/')                 // split based on URL path
        .at(-1)                     // get last item (query params)
        ?.replace('watch?v=', '')   // remove "watch" part, if needed
        .split(/[?&]/)              // split based on query params
        .at(0)                      // get first item (video ID)

    return `https://www.youtube.com/watch?v=${video_id}`
}

function parse_time(time_string: string) {
    if (time_string === '') {
        return NaN
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
            return NaN
    }

    return seconds
}
