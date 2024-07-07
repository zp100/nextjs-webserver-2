import MiniButton from './MiniButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Track({ list_index, name, tag_list }: {
    list_index: number,
    name: string,
    tag_list: string[]
}): React.ReactNode {
    return <>
        <div className="flex gap-x-1">
            {/* Main track button. */}
            <button className="flex-1 p-1 flex items-center gap-x-2 rounded-lg hover:bg-neutral-800">
                <div className="text-white text-lg text-right min-w-10">
                    {list_index}.
                </div>
                <div className="flex-1 flex flex-wrap items-center gap-x-2">
                    <span className="text-white text-lg text-left">
                        {name}
                    </span>
                    {tag_list.map((tag: string) => <span key={tag} className="rounded-md px-2 py-1 bg-neutral-700">
                        {tag}
                    </span>)}
                </div>
            </button>

            {/* Track mini buttons. */}
            <div className="self-center flex flex-col">
                <MiniButton>
                    <FontAwesomeIcon icon={faBars} />
                </MiniButton>
                <MiniButton>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </MiniButton>
            </div>
        </div>
    </>
}
