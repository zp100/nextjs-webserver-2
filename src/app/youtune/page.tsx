'use client'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'
import youtunePlaceholder from './YouTune_placeholder.png'

export default function Page() {
    return <>
        <div className="flex flex-col gap-4 md:flex-row">
            {/* Video options. */}
            <div className="md:w-80">
                {/* Fixed sidebar on larger screens. */}
                <div className="md:fixed md:w-80">
                    {/* Video box. */}
                    <div className="h-36 flex justify-center">
                        <YouTubePlayer videoUrl="https://www.youtube.com/watch?v=aTawJ5Bd36M" />
                    </div>

                    {/* TODO */}
                    Options
                </div>
            </div>

            {/* Track list. */}
            <div className="flex-1 p-4 rounded-lg bg-neutral-900">
                {/* TODO */}
                Track list
            </div>
        </div>
    </>
}

function YouTubePlayer({ videoUrl }: { videoUrl?: string }) {
    // Detect if this is on the client.
    const [ isClient, setIsClient ] = React.useState(false)
    React.useEffect(() => {
        setIsClient(true)
    }, [])

    // Only load the embed if on the client, to prevent hydration errors.
    return (isClient && videoUrl ? <>
        <ReactPlayer url={ videoUrl } width="100%" height="100%" controls />
    </> : <>
        <Image src={ youtunePlaceholder } alt="YouTune logo placeholder" className="w-min h-full p-4" />
    </>)
}
