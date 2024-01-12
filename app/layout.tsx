import type { PropsWithChildren } from 'react'
import { DM_Sans } from 'next/font/google'
import clsx from 'clsx/lite'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './_components/nav'
import logo from './logo.svg'
import logoDark from './logo-dark.svg'
import './globals.css'

const dm_sans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${dm_sans.variable} min-w-[375px]`}>
      <body className="text-[0.9375rem]">
        <header
          className={clsx(
            'relative top-0 z-10 mx-auto flex items-center justify-between',
            'bg-white px-6 py-7 sm:px-10 xl:max-w-6xl xl:px-0'
          )}
        >
          <Link href="/">
            <Image src={logo} alt="Photosnap" priority />
          </Link>
          <Nav />
        </header>
        <main>{children}</main>
        <footer className="bg-black py-14 text-white sm:py-7">
          <div
            className={clsx(
              'mx-auto flex flex-col items-center gap-y-8 px-8 sm:flex-row',
              'sm:justify-between sm:px-10 xl:max-w-6xl xl:px-0'
            )}
          >
            <Image src={logoDark} alt="Photosnap" />
            <p>Copyright 2023. All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
