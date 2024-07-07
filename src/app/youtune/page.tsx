import TrackVideo from './_components/TrackVideo'
import TrackList from './_components/TrackList'

export default function Page(): React.ReactNode {
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
                <TrackList owner="Zach" />
            </div>
        </div>
    </>
}
