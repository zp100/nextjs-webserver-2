export default function Button({ click, children }: {
    click?: () => void,
    children: React.ReactNode,
}): React.ReactNode {
    return <>
        <button
            className="border-2 border-neutral-700 rounded-md bg-neutral-800 hover:bg-neutral-700"
            onClick={click}
        >
            {children}
        </button>
    </>
}
