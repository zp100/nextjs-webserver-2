import { QueryResultRow, sql } from '@vercel/postgres'
import Client from './_components/Client'

// Disable SQL data caching.
export const revalidate = 0

export default async function Page(): Promise<React.AwaitedReactNode> {
    // DEBUG
    const user = 'Zach'

    const query_default_volume = await sql`
        select default_volume
        from youtune_users
        where username = ${user};
    `
    const default_volume = Number(query_default_volume.rows[0]['default_volume'])

    const query_tracks = await sql`
        select *
        from youtune_tracks
        where owner = ${user};
    `
    const track_list = query_tracks.rows
        .map((row: QueryResultRow) => row as YoutuneTrack)
        .toSorted((a: YoutuneTrack, b: YoutuneTrack) => a.index - b.index)

    return <>
        <Client
            user={user}
            default_volume={default_volume}
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

export function parse_tags(tags: string): string[] {
    if (tags.trim() === '') {
        return []
    }

    return tags.split(',').map((tag: string) => tag.trim())
}
