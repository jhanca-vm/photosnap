'use client'

import clsx from 'clsx/lite'
import usePlans from '@/_lib/hooks/use-plans'
import Switch from './switch'

interface Properties {
  data: {
    id: number
    name: string
    description: string
    price: string
  }[]
}

export default function Plans({ data }: Properties) {
  const { isYearly, setIsYearly, calculatePrice } = usePlans()

  return (
    <section className="my-16 px-7 sm:my-20 md:my-28 md:px-10">
      <Switch
        isYearly={isYearly}
        handleChange={({ target }) => setIsYearly(target.checked)}
      />
      <div
        className={clsx(
          'mx-auto mt-10 grid max-w-6xl items-center gap-y-6 text-center',
          'lg:mt-12 lg:grid-cols-3 lg:gap-x-8 @sm:text-left'
        )}
      >
        {data.map(({ id, name, description, price }) => (
          <article
            className={clsx(
              'relative px-5 py-12',
              name === 'Pro'
                ? 'bg-black text-white lg:py-16'
                : 'bg-neutral-100',
              'sm:px-10 @sm:flex @sm:justify-between @sm:py-10'
            )}
            key={`plan-${id}`}
          >
            {name === 'Pro' && (
              <span
                className={
                  'absolute inset-0 h-1.5 bg-gradient @sm:h-full @sm:w-1.5'
                }
              />
            )}
            <div className="@sm:w-[17rem]">
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="mb-10 mt-4 @sm:mb-0">{description}</p>
            </div>
            <p className="opacity-100 @sm:text-right">
              <span className="text-5xl font-bold tracking-wider">
                ${calculatePrice(price)}
              </span>
              <span className="block opacity-60">
                {isYearly ? 'per year' : 'per month'}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
