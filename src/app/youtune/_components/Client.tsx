'use client'
import React from 'react'
import { YoutuneTracksRow } from '../page'
import TrackList from './TrackList'
import TrackVideo from './TrackVideo'

export default function Client({ track_list }: {
    track_list: YoutuneTracksRow[],
}): React.ReactNode {
    const [ cur_track_id, set_cur_track_id ] = React.useState<string>()

    return <>
        <div className="p-4 flex flex-col gap-y-4 md:p-8 md:flex-row md:gap-x-4">
            {/* Video options. */}
            <div className="flex flex-col gap-y-4 md:sticky md:top-0 md:-my-8 md:py-8 md:w-80 md:h-screen
                md:overflow-y-hidden">
                {/* Track video (or placeholder). */}
                <TrackVideo />

                {/* TODO */}
                <div className="md:h-full md:overflow-y-auto">
                    Options
                </div>
            </div>

            {/* Track list. */}
            <div className="flex-1">
                <TrackList
                    list={track_list}
                    cur_track_id={cur_track_id}
                    track_click_callback={(track_id: string) => set_cur_track_id(track_id)}
                />
            </div>
        </div>
    </>
}
