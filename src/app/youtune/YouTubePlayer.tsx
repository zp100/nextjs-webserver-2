'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import youtunePlaceholder from './YouTune_placeholder.png'

export default function YouTubePlayer({ url }: { url?: string }) {
    // Detect if this is on the client.
    const [ isClient, setIsClient ] = React.useState(false)
    React.useEffect(() => setIsClient(true), [])

    // Only load the embed if on the client, to prevent hydration errors.
    return (isClient && url ? <>
        <ReactPlayer
            url={ url }
            width="100%"
            height="100%"
            controls
            playing />
    </> : <>
        <Image src={ youtunePlaceholder } alt="YouTune logo placeholder" className="w-min h-full p-4" />
    </>)
}
