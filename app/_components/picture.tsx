import type { StaticImageData } from 'next/image'
import clsx from 'clsx/lite'

interface Properties {
  className?: string
  image: StaticImageData
  imageSm: StaticImageData
  imageLg: StaticImageData
}

export default function Picture({
  className,
  image,
  imageSm,
  imageLg
}: Properties) {
  return (
    <picture className="sm:basis-[273px] lg:basis-full">
      <source
        srcSet={imageLg.src}
        media="(min-width: 1024px)"
        width={imageLg.width}
        height={imageLg.height}
      />
      <source
        srcSet={imageSm.src}
        media="(min-width: 640px)"
        width={imageSm.width}
        height={imageSm.height}
      />
      <img
        className={clsx('h-full w-full object-cover', className)}
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
      />
    </picture>
  )
}
