import { QueryResultRow, sql } from '@vercel/postgres'
import React from 'react'
import TrackList from './_components/TrackList'
import TrackVideo from './_components/TrackVideo'

export default async function Page(): Promise<React.AwaitedReactNode> {
    const owner = 'Zach'
    const { rows } = await sql`
        select *
        from youtune_tracks
        where owner = ${owner};
    `
    const track_list = rows
        .map((row: QueryResultRow) => row as YoutuneTracksRow)
        .toSorted((a: YoutuneTracksRow, b: YoutuneTracksRow) => a.index - b.index)

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
                <TrackList list={track_list} />
            </div>
        </div>
    </>
}

export interface YoutuneTracksRow {
    track_id: string;
    owner: string;
    index: number;
    title: string;
    tags: string;
    url: string;
    volume: string;
    start_time: string;
    fade_in_sec: string;
    fade_out_sec: string;
    end_time: string;
}
