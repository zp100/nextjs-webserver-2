import { QueryResultRow, sql } from '@vercel/postgres'
import React from 'react'
import Client from './_components/Client'

// Disable SQL data caching.
export const revalidate = 0

export default async function Page(): Promise<React.AwaitedReactNode> {
    // DEBUG
    const user = 'Zach'

    const query_result = await sql`
        select *
        from youtune_tracks
        where owner = ${user};
    `
    const track_list = query_result.rows
        .map((row: QueryResultRow) => row as YoutuneTrack)
        .toSorted((a: YoutuneTrack, b: YoutuneTrack) => a.index - b.index)

    return <>
        <Client
            user={user}
            track_list={track_list}
        />
    </>
}

export interface YoutuneTrack {
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
