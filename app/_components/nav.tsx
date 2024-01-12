'use client'

import { type MouseEvent, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx/lite'
import Link from 'next/link'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const links = ['Stories', 'Features', 'Pricing']

  function close(event: MouseEvent) {
    const { nodeName } = event.target as HTMLElement

    if (nodeName === 'NAV') setIsOpen(false)
  }

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    const header = document.querySelector('header')!
    isOpen ? header.classList.add('sticky') : header.classList.remove('sticky')
  }, [isOpen])

  return (
    <>
      <button
        className={clsx(
          isOpen && 'btn-open',
          'flex h-[15px] w-[20px] flex-col justify-center gap-[5px] sm:hidden'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="h-px w-full bg-black transition-all" />
        <span className="h-px w-full bg-black transition-all" />
      </button>
      <nav
        className={clsx(
          !isOpen && 'hidden',
          'absolute left-0 top-full z-10 h-lvh w-full bg-black/50 sm:static',
          'sm:block sm:h-auto sm:w-fit'
        )}
        onClick={close}
      >
        <ul
          className={clsx(
            'flex flex-col items-center gap-5 bg-white p-8 font-bold',
            'uppercase tracking-widest sm:flex-row sm:gap-9 sm:p-0 sm:text-xs'
          )}
        >
          {links.map(name => (
            <li key={name}>
              <Link
                className="transition-opacity hover:opacity-30"
                href={`/${name.toLowerCase()}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
