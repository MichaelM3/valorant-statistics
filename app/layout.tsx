import '../styles/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body className="bg-slate-700 text-white">
                {children}
            </body>
        </html>
    )
}
