import type { Metadata } from 'next'
import clsx from 'clsx/lite'
import prisma from '@/_lib/prisma'
import Stories from '@/_components/stories'

export const metadata: Metadata = { title: 'Stories | Photosnap' }

export default async function Page() {
  const stories = await prisma.story.findMany({ orderBy: { date: 'desc' } })

  return (
    <>
      <section className="relative">
        <picture>
          <source
            srcSet="/images/lg/moon-of-appalacia.jpg"
            media="(min-width: 1024px)"
            width="1440"
            height="650"
          />
          <source
            srcSet="/images/sm/moon-of-appalacia.jpg"
            media="(min-width: 640px)"
            width="768"
            height="650"
          />
          <img
            className="w-full"
            src="/images/moon-of-appalacia.jpg"
            alt=""
            width="375"
            height="317"
          />
        </picture>
        <div
          className={clsx(
            'bg-black px-7 py-12 text-white sm:absolute sm:inset-0 sm:flex',
            'sm:flex-col sm:justify-center sm:bg-transparent sm:px-10 xl:px-28'
          )}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest">
            {"Last month's featured story"}
          </h2>
          <h1
            className={clsx(
              'my-4 text-3xl font-bold uppercase tracking-wider sm:mt-6',
              'sm:w-80 sm:text-5xl'
            )}
          >
            Hazy full moon of appalachia
          </h1>
          <p className="flex gap-x-2 text-sm opacity-100">
            <time className="opacity-75" dateTime="2023-03-02">
              March 2nd 2023
            </time>
            <span>by John Appleseed</span>
          </p>
          <p className="mt-6 sm:w-[24.25rem]">
            {'The dissected plateau area, while not actually made up of ' +
              'geological mountains, is popularly called "mountains," ' +
              'especially in eastern Kentucky and West Virginia, and while ' +
              'the ridges are not high, the terrain is extremely rugged.'}
          </p>
        </div>
      </section>
      <Stories data={stories} date />
    </>
  )
}
