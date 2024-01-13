import type { Metadata } from 'next'
import prisma from './_lib/prisma'
import Picture from './_components/picture'
import HeroContent from './_components/hero-content'
import Section from './_components/section'
import Stories from './_components/stories'
import Features from './_components/features'

export const metadata: Metadata = { title: 'Photosnap' }

export default async function Page() {
  const [stories, features] = await Promise.all([
    prisma.story.findMany({ orderBy: { date: 'desc' }, take: 4 }),
    prisma.feature.findMany({ take: 3 })
  ])

  return (
    <>
      <section className="sm:flex sm:flex-row-reverse">
        <Picture
          className="sm:aspect-[1/2] lg:aspect-[83/65]"
          image={{
            src: '/images/create-and-share.webp',
            width: 375,
            height: 294
          }}
          imageSm={{
            src: '/images/sm/create-and-share.webp',
            width: 273,
            height: 650
          }}
          imageLg={{
            src: '/images/lg/create-and-share.webp',
            width: 830,
            height: 650
          }}
        />
        <HeroContent title="Create and share your photo stories.">
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
        </HeroContent>
      </section>
      <Section
        image="beautiful-stories.webp"
        title="Beautiful stories every time"
      >
        <p>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
      </Section>
      <Section image="designed-for-everyone.webp" title="Designed for everyone">
        <p>
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
      </Section>
      <Stories data={stories} />
      <Features data={features} />
    </>
  )
}
