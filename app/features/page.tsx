import type { Metadata } from 'next'
import prisma from '@/_lib/prisma'
import Picture from '@/_components/picture'
import HeroContent from '@/_components/hero-content'
import Features from '@/_components/features'
import image from './hero.webp'
import imageSm from './hero-sm.webp'
import imageLg from './hero-lg.webp'

export const metadata: Metadata = { title: 'Features | Photosnap' }

export default async function Page() {
  const features = await prisma.feature.findMany()

  return (
    <>
      <section className="sm:flex sm:flex-row-reverse">
        <Picture image={image} imageSm={imageSm} imageLg={imageLg} />
        <HeroContent title="Features">
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </HeroContent>
      </section>
      <Features className="sm:grid-cols-2" data={features} />
    </>
  )
}
