'use client'
import { useState } from 'react'
import { YoutuneTrack } from '../page'
import TrackList from './TrackList'
import TrackVideo from './TrackVideo'
import Button from './Button'

export default function Client({ user, default_volume, track_list }: {
    user: string,
    default_volume: number,
    track_list: YoutuneTrack[],
}): React.ReactNode {
    const [ render, set_render ] = useState<boolean>(false)
    const [ cur_track_id, set_cur_track_id ] = useState<string>()
    const cur_track = track_list.find((track: YoutuneTrack) => track.track_id === cur_track_id)

    let tab_title = 'YouTune'
    if (user && user !== '') {
        tab_title = `${user}'s tracks | ` + tab_title
    }
    if (cur_track) {
        tab_title = `${cur_track.title} | ` + tab_title
    }

    return <>
        <title>
            {tab_title}
        </title>

        <div className="p-4 flex flex-col gap-y-4 md:p-8 md:flex-row md:gap-x-4">
            {/* Video options. */}
            <div
                className="flex flex-col gap-y-4 md:sticky md:top-0 md:-my-8 md:py-8 md:w-80 md:h-screen
                    md:overflow-y-hidden"
            >
                {/* Track video (or placeholder). */}
                <TrackVideo
                    key={render ? 1 : 0}
                    default_volume={default_volume}
                    track={cur_track}
                />

                {/* TODO */}
                <div className="md:h-full md:overflow-y-auto">
                    <Button click={() => set_render(!render)}>
                        Reload
                    </Button>
                </div>
            </div>

            {/* Track list. */}
            <div className="flex-1">
                <TrackList
                    list={track_list}
                    cur_track_id={cur_track_id}
                    track_click_callback={(track: YoutuneTrack) => set_cur_track_id(track.track_id)}
                />
            </div>
        </div>
    </>
}
