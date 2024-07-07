import { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
    title: 'YouTune',
    icons: {
        icon: '/icon.png',
    },
}

export default function Layout({ children }: { children: React.ReactNode }): React.ReactNode {
    return <>
        <div className="w-screen min-h-screen flex justify-center bg-neutral-950 text-neutral-400">
            <div className="w-full max-w-screen-xl h-full">
                { children }
            </div>
        </div>
    </>
}
