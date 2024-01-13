import { type ReactNode, createElement } from 'react'

interface Properties {
  as: 'h1' | 'h2'
  children: ReactNode
}

export default function Title({ as, children }: Properties) {
  return createElement(
    as,
    {
      className:
        'mb-4 text-3xl font-bold uppercase tracking-wider sm:mb-5 sm:text-5xl'
    },
    children
  )
}
