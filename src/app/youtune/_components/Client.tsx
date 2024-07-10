'use client'
import React from 'react'
import { YoutuneTrack } from '../page'
import TrackList from './TrackList'
import TrackVideo from './TrackVideo'

export default function Client({ user, track_list }: {
    user: string,
    track_list: YoutuneTrack[],
}): React.ReactNode {
    const [ cur_track_id, set_cur_track_id ] = React.useState<string>()
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
            <div className="flex flex-col gap-y-4 md:sticky md:top-0 md:-my-8 md:py-8 md:w-80 md:h-screen
                md:overflow-y-hidden">
                {/* Track video (or placeholder). */}
                <TrackVideo track={cur_track} />

                {/* TODO */}
                <div className="md:h-full md:overflow-y-auto">
                    {(() => {
                        const this_track = cur_track as { [p: string]: any }
                        const props: React.ReactNode[] = []
                        if (cur_track !== undefined) {
                            for (const p in this_track) {
                                props.push(<>
                                    <div>
                                        {p}: {this_track[p]}
                                    </div>
                                </>)
                            }
                        }
                        return <>
                            {props}
                        </>
                    })()}
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
