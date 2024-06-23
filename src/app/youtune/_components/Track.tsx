import MiniButton from './MiniButton'

export default function Track({ list_index, name, tag_list }: {
    list_index: number,
    name: string,
    tag_list: string[]
}): React.ReactNode {
    return <>
        <div className="flex flex-nowrap">
            {/* Main track button. */}
            <button className="flex-1 flex flex-nowrap items-center gap-x-3
            rounded-lg bg-transparent hover:bg-neutral-800">
                <div className="text-white text-lg text-right min-w-10">
                    {list_index}.
                </div>
                <div className="text-white text-lg">
                    {name}
                </div>
                {tag_list.map((tag: string) => <div key={tag} className="rounded-md px-2 py-1 bg-neutral-700">
                    {tag}
                </div>)}
            </button>

            {/* Track min buttons. */}
            <div className="flex flex-col flex-nowrap">
                <MiniButton>
                    ☰
                </MiniButton>
                <MiniButton>
                    ✏️
                </MiniButton>
            </div>
        </div>
    </>
}
