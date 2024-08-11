import { parse_tags, YoutuneTrack } from '../page'
import Track from './Track'

export default function TrackList({ list, cur_track_id, track_click_callback }: {
    list: YoutuneTrack[],
    cur_track_id?: string,
    track_click_callback?: (_track: YoutuneTrack) => void,
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
                {list.map((track: YoutuneTrack) => <Track
                    key={track.track_id}
                    list_index={track.index}
                    name={track.title}
                    tag_list={parse_tags(track.tags)}
                    is_selected={track.track_id === cur_track_id}
                    click_callback={() => track_click_callback?.(track)}
                />)}
            </div>
        </div>
    </>
}
