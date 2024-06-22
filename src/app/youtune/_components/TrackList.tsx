import Track from './Track'

export default function TrackList(): React.ReactNode {
    const tracks = [ 'track 1', 'track 2', 'track 3' ]

    const track_list: React.ReactNode[] = []
    for (let i = 0; i < tracks.length; i++) {
        track_list.push(<Track
            key={ i }
            list_index={ i + 1 }
            name={ tracks[i] }
            tag_list={ [] }
        />)
    }

    return <>
        <div className="flex flex-col gap-4">
            { track_list }
        </div>
    </>
}
