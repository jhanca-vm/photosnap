'use client'

import clsx from 'clsx/lite'
import Link from 'next/link'
import useNav from '@/_lib/hooks/use-nav'

export default function Nav() {
  const { links, isOpen, setIsOpen, close } = useNav()

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
