import TrackVideo from './_components/TrackVideo'
import TrackList from './_components/TrackList'

export default function Page(): React.ReactNode {
    return <>
        <div className="flex flex-col gap-4 md:flex-row">
            {/* Video options. */}
            <div className="md:w-80">
                {/* Fixed sidebar on larger screens. */}
                <div className="md:fixed md:w-80">
                    {/* Track video (or placeholder). */}
                    <TrackVideo />

                    {/* TODO */}
                    Options
                </div>
            </div>

            {/* Track list. */}
            <TrackList owner="Zach" />
        </div>
    </>
}
