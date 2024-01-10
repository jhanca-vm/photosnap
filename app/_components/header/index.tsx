import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx/lite'
import logo from '@/logo.svg'
import styles from './styles.module.css'

export default function Header() {
  return (
    <header
      className={clsx(
        'relative mx-auto flex justify-between px-6 py-7 sm:px-10 xl:max-w-6xl',
        'xl:px-0'
      )}
    >
      <Link href="/">
        <Image src={logo} alt="Photosnap" priority />
      </Link>
      <input
        className={`${styles.input} appearance-none sm:hidden`}
        type="checkbox"
        id="menu-button"
        aria-label="Menu"
        aria-controls="menu"
      />
      <label
        className={`${styles.label} w-[20px] bg-center bg-no-repeat sm:hidden`}
        htmlFor="menu-button"
      />
      <nav
        id="menu"
        className={clsx(
          'absolute left-0 top-full hidden w-full bg-white p-8 sm:static',
          'sm:block sm:w-fit sm:p-0'
        )}
      >
        <ul
          className={clsx(
            'flex flex-col items-center gap-y-5 font-bold uppercase',
            'tracking-widest sm:flex-row sm:gap-x-9 sm:text-xs'
          )}
        >
          <li>
            <Link className="hover:opacity-30" href="/stories">
              Stories
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-30" href="/features">
              Features
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-30" href="/pricing">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
