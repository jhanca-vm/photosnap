import clsx from 'clsx/lite'
import GradientBar from './gradient-bar'

export default function Hero() {
  return (
    <section className="sm:flex sm:flex-row-reverse">
      <picture className="sm:basis-[273px] lg:basis-auto">
        <source
          srcSet="/images/lg/create-and-share.jpg"
          media="(min-width: 1024px)"
          width="830"
          height="650"
        />
        <source
          srcSet="/images/sm/create-and-share.jpg"
          media="(min-width: 640px)"
          width="273"
          height="650"
        />
        <img
          className="h-full w-full object-cover sm:aspect-[1/2] lg:aspect-auto"
          src="/images/create-and-share.jpg"
          alt=""
          width="375"
          height="294"
        />
      </picture>
      <div
        className={clsx(
          'relative bg-black py-18 text-white sm:flex sm:flex-grow',
          'sm:basis-min sm:items-center lg:flex-shrink-0 lg:basis-152'
        )}
      >
        <div className="px-8 sm:relative sm:px-12 md:px-14 lg:px-28">
          <GradientBar />
          <h1
            className={clsx(
              'mb-4 text-3xl font-bold uppercase tracking-wider sm:mb-5',
              'sm:text-5xl'
            )}
          >
            Create and share your photo stories.
          </h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
        </div>
      </div>
    </section>
  )
}
