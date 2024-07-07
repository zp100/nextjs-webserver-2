export default function Button({ children }: {
    children: React.ReactNode
}): React.ReactNode {
    return <>
        <button className="border-2 border-neutral-700 rounded-md bg-neutral-800 hover:bg-neutral-700">
            {children}
        </button>
    </>
}
