'use client'
import { QueryResultRow, sql } from '@vercel/postgres'
import { YoutuneTracksRow } from '../page'
import Track from './Track'

export default function TrackList({ list }: {
    list: YoutuneTracksRow[],
}): React.ReactNode {
    return <>
        <div className="p-4 rounded-lg bg-neutral-900">
            {/* Message. */}
            <span>
                Tracks in mix: <b className="text-white">{list.length}</b>
            </span>
            <hr className="my-4 border-neutral-400" />

            {/* Track list. */}
            <div className="flex flex-col gap-y-1">
                {list.map((track: YoutuneTracksRow) => <Track
                    key={track.track_id}
                    list_index={track.index}
                    name={track.title}
                    tag_list={track.tags.split(',').map((tag: string) => tag.trim())}
                />)}
            </div>
        </div>
    </>
}
