'use client'
import React from 'react'
import YouTubePlayer from './YouTubePlayer'

export default function Page() {
    const [ url, setUrl ] = React.useState('')

    return <>
        <div className="flex flex-col gap-4 md:flex-row">
            {/* Video options. */}
            <div className="md:w-80">
                {/* Fixed sidebar on larger screens. */}
                <div className="md:fixed md:w-80">
                    {/* Video box. */}
                    <div className="h-36 flex justify-center">
                        <YouTubePlayer url={ url } />
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

        <button onClick={ () => setUrl('https://www.youtube.com/watch?v=aTawJ5Bd36M') }
            className="mt-64">Click me UwU</button>
    </>
}
