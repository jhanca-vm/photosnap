import type { ReactNode } from 'react'
import clsx from 'clsx/lite'
import Title from './title'

interface Properties {
  title: string
  children: ReactNode
}

export default function HeroContent({ title, children }: Properties) {
  return (
    <div
      className={clsx(
        'relative bg-black py-18 text-white sm:flex sm:flex-grow',
        'sm:basis-min sm:items-center lg:flex-shrink-0 lg:basis-152'
      )}
    >
      <div className="px-8 sm:relative sm:px-12 md:px-14 lg:px-28">
        <span
          className={
            'absolute top-0 h-1.5 w-32 bg-gradient sm:left-0 sm:h-full sm:w-1.5'
          }
        />
        <Title as="h1">{title}</Title>
        {children}
      </div>
    </div>
  )
}
