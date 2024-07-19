import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const tagRouter = router({
  getBlogs: publicProcedure
    .input(
      z.object({
        tagSlug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { tagSlug } = input

        const { docs: tagData } = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: tagSlug,
            },
          },
        })
        const { docs: blogsData } = await payload.find({
          collection: 'blogs',
          where: {
            'tags.value': {
              contains: tagData?.at(0)?.id,
            },
          },
        })

        return { blogsData, tagData }
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),

  getTagBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input
      try {
        const { docs: tag } = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: slug,
            },
          },
        })
        return tag?.at(0)
      } catch (error) {}
    }),
})
