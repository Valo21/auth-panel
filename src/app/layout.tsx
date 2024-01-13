import type { Metadata } from 'next'
import { Sen } from 'next/font/google'
import './globals.css'
import Session from '@src/components/Session'
import Link from 'next/link'

const inter = Sen({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tr from-emerald-400 to-cyan-400 overflow-x-hidden`}>
        <Session>
          {children}
        </Session>
        <Link className='absolute right-2 bottom-2 underline' href='https://github.com/Valo21/auth-panel'>Source code of this page</Link>
      </body>
    </html>
  )
}
