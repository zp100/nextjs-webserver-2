'use client'
import React from 'react'
import TrackVideo from './_components/TrackVideo'
import TrackList from './_components/TrackList'

export default function Page(): React.ReactNode {
    const [ url, set_url ] = React.useState<string>()

    return <>
        <div className="flex flex-col gap-4 md:flex-row">
            {/* Video options. */}
            <div className="md:w-80">
                {/* Fixed sidebar on larger screens. */}
                <div className="md:fixed md:w-80">
                    <div className="h-36 flex justify-center">
                        <TrackVideo url={ url } />
                    </div>

                    {/* TODO */}
                    Options
                </div>
            </div>

            {/* Track list. */}
            <div className="flex-1 p-4 rounded-lg bg-neutral-900">
                <TrackList />
            </div>
        </div>

        {/* DEBUG */}
        <button onClick={ () => set_url('https://www.youtube.com/watch?v=aTawJ5Bd36M') } className="mt-64">
            Click me UwU
        </button>
    </>
}
