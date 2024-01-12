import type { ReactNode } from 'react'
import clsx from 'clsx/lite'

interface Properties {
  image: string
  title: string
  children?: ReactNode
}

export default function Section({ image, title, children }: Properties) {
  return (
    <section className="sm:flex sm:odd:flex-row-reverse">
      <picture className="sm:basis-[273px] lg:basis-auto">
        <source
          srcSet={`/images/lg/${image}`}
          media="(min-width: 1024px)"
          width="830"
          height="600"
        />
        <source
          srcSet={`/images/sm/${image}`}
          media="(min-width: 640px)"
          width="273"
          height="600"
        />
        <img
          className="h-full w-full object-cover sm:aspect-[1/2] lg:aspect-auto"
          src={`/images/${image}`}
          alt=""
          width="375"
          height="271"
        />
      </picture>
      <div
        className={clsx(
          'px-8 py-18 sm:flex sm:flex-grow sm:basis-min sm:flex-col',
          'sm:justify-center sm:px-12 md:px-14 lg:flex-shrink-0 lg:basis-152',
          'lg:px-28'
        )}
      >
        <h2
          className={clsx(
            'mb-4 text-3xl font-bold uppercase tracking-wider sm:mb-5',
            'sm:text-5xl'
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
