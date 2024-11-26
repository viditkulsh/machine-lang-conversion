import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Number System Converter',
  description: 'Convert between different number systems easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col`}>
        <header className="bg-gray-800 p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">Number System Converter</h1>
        </header>
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className="bg-gray-800 p-4 text-center">
          <p className="text-sm">&copy; 2023 Number System Converter. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

