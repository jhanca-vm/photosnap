import clsx from 'clsx/lite'

export default function Hero() {
  return (
    <section className="sm:flex sm:flex-row-reverse">
      <picture className="w-full sm:aspect-[1/2] lg:aspect-[83/65]">
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
          className="h-full w-full object-cover"
          src="/images/create-and-share.jpg"
          alt=""
          width="375"
          height="294"
        />
      </picture>
      <div
        className={clsx(
          'relative bg-black py-18 text-white sm:flex sm:basis-auto',
          'sm:items-center lg:w-152 lg:flex-shrink-0'
        )}
      >
        <div className="px-8 sm:relative md:px-14 lg:px-28">
          <span
            className={clsx(
              'absolute top-0 h-1.5 w-32 bg-gradient sm:left-0 sm:h-full',
              'sm:w-1.5'
            )}
          />
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
