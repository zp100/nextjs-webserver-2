export default function MiniButton({ children }: {
    children: React.ReactNode
}): React.ReactNode {
    return <>
        <button className="w-6 text-sm bg-neutral-800 border-2 border-neutral-700 rounded-md hover:bg-neutral-700">
            {children}
        </button>
    </>
}
