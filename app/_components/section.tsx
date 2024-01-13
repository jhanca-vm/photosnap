import type { ReactNode } from 'react'
import clsx from 'clsx/lite'
import Picture from './picture'
import Title from './title'

interface Properties {
  image: string
  title: string
  children?: ReactNode
}

export default function Section({ image, title, children }: Properties) {
  return (
    <section className="sm:flex sm:odd:flex-row-reverse">
      <Picture
        className="sm:aspect-[1/2] lg:aspect-[83/60]"
        image={{ src: `/images/${image}`, width: 375, height: 271 }}
        imageSm={{ src: `/images/sm/${image}`, width: 273, height: 600 }}
        imageLg={{ src: `/images/lg/${image}`, width: 830, height: 600 }}
      />
      <div
        className={clsx(
          'px-8 py-18 sm:flex sm:flex-grow sm:basis-min sm:flex-col',
          'sm:justify-center sm:px-12 md:px-14 lg:flex-shrink-0 lg:basis-152',
          'lg:px-28'
        )}
      >
        <Title as="h2">{title}</Title>
        {children}
      </div>
    </section>
  )
}
