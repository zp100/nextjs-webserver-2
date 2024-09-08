import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ mini = false, icon, title, click, children }: {
    mini?: boolean,
    icon?: IconDefinition,
    title?: string,
    click?: () => void,
    children?: React.ReactNode,
}): React.ReactNode {
    const fa_icon = (icon !== undefined
        ? <div>
            <FontAwesomeIcon icon={icon} />
        </div>
        : <></>
    )

    return <>
        <button
            title={title}
            className={`${mini ? 'w-6 h-6 text-sm' : 'w-full'}
                flex align-middle justify-center gap-x-2 bg-neutral-800 border-2 border-neutral-700 rounded-md
                hover:bg-neutral-700 active:text-white active:border-red-600 active:bg-red-600 focus:bg-neutral-700`}
            onClick={click}
        >
            {fa_icon}
            {children}
        </button>
    </>
}
