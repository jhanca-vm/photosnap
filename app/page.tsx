import type { Metadata } from 'next'
import prisma from './_lib/prisma'
import Hero from './_components/hero'
import Section from './_components/section'
import Stories from './_components/stories'
import Features from './_components/features'

export const metadata: Metadata = { title: 'Photosnap' }

export default async function Home() {
  const [stories, features] = await Promise.all([
    prisma.story.findMany({ orderBy: { date: 'desc' }, take: 4 }),
    prisma.feature.findMany({ take: 3 })
  ])

  return (
    <>
      <Hero />
      <Section
        image="beautiful-stories.jpg"
        title="Beautiful stories every time"
      >
        <p>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
      </Section>
      <Section image="designed-for-everyone.jpg" title="Designed for everyone">
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
