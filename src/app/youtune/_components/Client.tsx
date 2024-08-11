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
    const [ duration_time, set_duration_time ] = useState<number>(NaN)
    const [ elapsed_time, set_elapsed_time ] = useState<number>(NaN)
    const cur_track = track_list.find((track: YoutuneTrack) => track.track_id === cur_track_id)

    let tab_title = 'YouTune'
    if (user !== undefined && user !== '') {
        tab_title = `${user}'s tracks | ` + tab_title
    }
    if (cur_track !== undefined) {
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
                    videoTime={(dt: number, et: number) => {
                        set_duration_time(dt)
                        set_elapsed_time(et)
                    }}
                />

                {/* TODO */}
                <div className="md:h-full md:overflow-y-auto">
                    <div className="flex gap-x-2 justify-between text-white">
                        <div
                            className="whitespace-nowrap overflow-x-hidden text-ellipsis"
                            title={cur_track !== undefined ? `${cur_track.title} (${cur_track.tags})` : ''}
                        >
                            {cur_track?.title ?? <i>No track selected</i>}
                        </div>
                        <div className="whitespace-nowrap">
                            {`${get_time_string(elapsed_time)} / ${get_time_string(duration_time)} / ${get_time_string(
                                duration_time - elapsed_time)}`}
                        </div>
                    </div>
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

function get_time_string(time_sec: number): string {
    if (Number.isNaN(time_sec)) {
        return '–:––'
    }

    const minutes = Math.floor(time_sec / 60)
    const seconds = Math.floor(time_sec) % 60

    return (seconds < 10
        ? `${minutes}:0${seconds}`
        : `${minutes}:${seconds}`
    )
}
