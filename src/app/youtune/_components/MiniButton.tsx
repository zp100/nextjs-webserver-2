'use client'

export default function MiniButton({ click, children }: {
    click?: () => void,
    children?: React.ReactNode
}): React.ReactNode {
    return <>
        <button className="w-6 p-1 text-sm bg-neutral-800 border-2 border-neutral-700 rounded-md hover:bg-neutral-700"
            onClick={click}>
            {children}
        </button>
    </>
}
