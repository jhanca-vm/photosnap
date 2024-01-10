import type { PropsWithChildren } from 'react'
import { DM_Sans } from 'next/font/google'
import Header from './_components/header'
import './globals.css'

const dm_sans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${dm_sans.variable} min-w-[375px]`}>
      <body className="text-[0.9375rem]">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
