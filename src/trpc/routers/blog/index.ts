import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const blogRouter = router({
  getAllBlogs: publicProcedure
    .input(z.object({ page: z.number() }))
    ?.query(async ({ input }) => {
      const { page } = input
      try {
        const { docs, hasPrevPage, hasNextPage, totalPages } =
          await payload.find({
            collection: 'blogs',
            depth: 5,
            page: page,
            limit: 6,
            draft: false,
          })

        return { docs, meta: { hasPrevPage, hasNextPage, totalPages } }
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),

  getAllBlogsWithoutPagination: publicProcedure.query(async () => {
    try {
      const { docs } = await payload.find({
        collection: 'blogs',
        pagination: false,
        draft: false,
      })

      return docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),

  getAllBlogsByTag: publicProcedure
    .input(z.object({ slug: z.string() }))
    ?.query(async ({ input }) => {
      try {
        const { slug } = input
        const { docs: tagData } = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: slug,
            },
          },
        })

        if (!tagData.length) {
          return
        }

        const { docs: blogsData } = await payload.find({
          collection: 'blogs',
          where: {
            'tags.value': {
              equals: tagData?.at(0)?.id,
            },
          },
        })
        return blogsData
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),

  getBlogBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { docs } = await payload.find({
          collection: 'blogs',
          draft: false,
          where: {
            slug: {
              equals: input.slug,
            },
          },
        })

        return docs.at(0)
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
})
