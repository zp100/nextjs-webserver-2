import '../globals.css'

export default function Layout({ children }: {
    children: React.ReactNode,
}): React.ReactNode {
    return <>
        {children}
    </>
}
