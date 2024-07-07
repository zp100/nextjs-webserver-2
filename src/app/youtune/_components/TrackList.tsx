import { QueryResultRow, sql } from '@vercel/postgres'
import Track from './Track'

export default async function TrackList({ owner }: {
    owner: string
}): Promise<React.AwaitedReactNode> {
    const { rows } = await sql`
        select *
        from youtune_tracks
        where owner = ${owner};
    `
    const track_list = rows
        .map((row: QueryResultRow) => row as YoutuneTracksRow)
        .toSorted((a: YoutuneTracksRow, b: YoutuneTracksRow) => a.index - b.index)

    return <>
        <div className="p-4 rounded-lg bg-neutral-900">
            {/* Message. */}
            <span>
                Tracks in mix: <b className="text-white">{track_list.length}</b>
            </span>
            <hr className="my-4 border-neutral-400" />

            {/* Track list. */}
            <div className="flex flex-col gap-y-1">
                {track_list.map((track: YoutuneTracksRow) => <Track
                    key={track.track_id}
                    list_index={track.index}
                    name={track.title}
                    tag_list={track.tags.split(',').map((tag: string) => tag.trim())}
                />)}
            </div>
        </div>
    </>
}

interface YoutuneTracksRow {
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
