export default function Button({ click, children }: {
    click?: () => void,
    children: React.ReactNode,
}): React.ReactNode {
    return <>
        <button
            className="w-full
                bg-neutral-800 border-2 border-neutral-700 rounded-md
                hover:bg-neutral-700 active:border-red-800 active:bg-red-800 focus:bg-neutral-700"
            onClick={click}
        >
            {children}
        </button>
    </>
}
