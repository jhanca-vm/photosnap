import type { Metadata } from 'next'
import prisma from '@/_lib/prisma'
import Stories from '@/_components/stories'
import FeaturedStory from './featured-story'

export const metadata: Metadata = { title: 'Stories | Photosnap' }

export default async function Page() {
  const stories = await prisma.story.findMany({ orderBy: { date: 'desc' } })

  return (
    <>
      <FeaturedStory />
      <Stories data={stories} date />
    </>
  )
}
