import type { Story } from '@prisma/client'
import clsx from 'clsx/lite'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import advancedFormat from 'dayjs/plugin/advancedFormat'

interface Properties {
  data: Story[]
  date?: boolean
}

dayjs.extend(utc)
dayjs.extend(advancedFormat)

export default function Stories({ data, date: hasDate }: Properties) {
  return (
    <section className="sm:grid sm:grid-cols-2 lg:grid-cols-4">
      {data.map(({ id, name, author, date }) => {
        const utc = dayjs.utc(date)

        return (
          <article className="relative" key={`story-${id}`}>
            <picture>
              <source
                srcSet={`/images/sm/story/${id}.jpg`}
                media="(min-width: 640px)"
                width="360"
                height="500"
              />
              <img
                className="w-full bg-black"
                src={`/images/story/${id}.jpg`}
                alt=""
                width="375"
                height="375"
              />
            </picture>
            <div
              className={clsx(
                'absolute inset-0 flex flex-col justify-end bg-gradient-to-b',
                'from-transparent from-30% to-black/65 px-8 py-10',
                'text-white md:px-10'
              )}
            >
              {hasDate && (
                <time className="text-sm" dateTime={utc.format('YYYY-MM-DD')}>
                  {utc.format('MMMM Do YYYY')}
                </time>
              )}
              <h3 className="my-0.5 text-lg font-bold">{name}</h3>
              <p className="text-sm opacity-100">by {author}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
