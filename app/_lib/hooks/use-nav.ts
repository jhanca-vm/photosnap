import { useState, useEffect, type MouseEvent } from 'react'
import { usePathname } from 'next/navigation'

interface Event extends MouseEvent<HTMLElement> {
  target: HTMLElement
}

export default function useNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    const header = document.querySelector('header')!

    isOpen ? header.classList.add('sticky') : header.classList.remove('sticky')
  }, [isOpen])

  return {
    links: ['Stories', 'Features', 'Pricing'],
    isOpen,
    setIsOpen,
    close({ target: { nodeName } }: Event) {
      if (nodeName === 'NAV') setIsOpen(false)
    }
  }
}
