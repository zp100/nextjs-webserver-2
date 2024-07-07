import { QueryResultRow, sql } from '@vercel/postgres'
import React from 'react'
import Client from './_components/Client'

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
        <Client track_list={track_list} />
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
