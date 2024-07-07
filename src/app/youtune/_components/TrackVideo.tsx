'use client'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'
import youtunePlaceholder from '../_assets/YouTune_placeholder.png'

export default function TrackVideo({ url }: {
    url?: string
}): React.ReactNode {
    return <>
        <div className="h-36 flex justify-center">
            {(url !== undefined) ? <>
                <ReactPlayer
                    url={ parse_url(url) }
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </> : <>
                <Image
                    src={ youtunePlaceholder }
                    alt="YouTune logo placeholder"
                    className="w-min h-full p-4"
                />
            </>}
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
