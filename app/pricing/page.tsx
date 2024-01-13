import type { Metadata } from 'next'
import prisma from '@/_lib/prisma'
import Picture from '@/_components/picture'
import HeroContent from '@/_components/hero-content'
import Plans from './_components/plans'
import image from './hero.webp'
import imageSm from './hero-sm.webp'
import imageLg from './hero-lg.webp'

export const metadata: Metadata = { title: 'Pricing | Photosnap' }

export default async function Page() {
  const plans = await prisma.plan.findMany()
  const data = plans.map(({ price, ...rest }) => {
    return { ...rest, price: price.toString() }
  })

  return (
    <>
      <section className="sm:flex sm:flex-row-reverse">
        <Picture image={image} imageSm={imageSm} imageLg={imageLg} />
        <HeroContent title="Pricing">
          <p>
            {'Create a your stories, Photosnap is a platform for ' +
              "photographer and visual storytellers. It's the simple way to " +
              'create and share your photos.'}
          </p>
        </HeroContent>
      </section>
      <Plans data={data} />
    </>
  )
}
