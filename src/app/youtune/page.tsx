export default function Page() {
    return (
        <div className="flex flex-col gap-4 md:flex-row">
            {/* Video options. */}
            <div className="md:w-80">
                {/* Fixed sidebar on larger screens. */}
                <div className="md:fixed md:w-80">
                    Options
                </div>
            </div>

            {/* Track list. */}
            <div className="flex-1 p-4 rounded-lg bg-neutral-900">
                Track list
            </div>
        </div>
    )
}
