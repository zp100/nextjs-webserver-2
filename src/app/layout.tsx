import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
    return <>
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" />
            </head>
            <body>
                { children }
            </body>
        </html>
    </>
}
