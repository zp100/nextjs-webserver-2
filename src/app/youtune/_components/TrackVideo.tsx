'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import youtunePlaceholder from '../_assets/YouTune_placeholder.png'

export default function TrackVideo({ url }: { url?: string }): React.ReactNode {
    // Detect if this is on the client.
    const [ is_client, set_is_client ] = React.useState<boolean>(false)
    React.useEffect(() => set_is_client(true), [])

    // Only load the embed if on the client, to prevent hydration errors.
    if (is_client && url !== undefined) {
        return <>
            <ReactPlayer
                url={ url }
                width="100%"
                height="100%"
                controls
                playing />
        </>
    } else {
        return <>
            <Image
                src={ youtunePlaceholder }
                alt="YouTune logo placeholder"
                className="w-min h-full p-4" />
        </>
    }
}
