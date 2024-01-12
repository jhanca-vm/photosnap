import type { Feature } from '@prisma/client'
import clsx from 'clsx/lite'
import Image from 'next/image'

interface Properties {
  data: Feature[]
}

interface Size {
  width: number
  height: number
}

export default function Features({ data }: Properties) {
  const iconSizes: Record<string, Size> = {
    1: { width: 72, height: 72 },
    2: { width: 72, height: 36 },
    3: { width: 71, height: 72 }
  }

  return (
    <section
      className={clsx(
        'mx-auto grid gap-y-14 px-8 py-20 text-center md:gap-y-20 md:py-28',
        'lg:grid-cols-3 lg:items-baseline lg:gap-x-8 lg:px-10 xl:py-32',
        'xl:max-w-6xl xl:px-0'
      )}
    >
      {data.map(({ id, name, description }) => (
        <article key={`feature-${id}`}>
          <Image
            className="mx-auto"
            src={`/images/feature/${id}.svg`}
            alt=""
            {...iconSizes[id]}
          />
          <h3 className="mb-4 mt-12 text-lg font-bold">{name}</h3>
          <p className="mx-auto max-w-md">{description}</p>
        </article>
      ))}
    </section>
  )
}
