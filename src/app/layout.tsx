import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberSecure Quiz Portal | Raise Awareness',
  description: 'A cybersecurity and anti-corruption awareness quiz portal for students and faculty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-hacker-darker text-hacker-green`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
