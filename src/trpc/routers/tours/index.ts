import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })
export const toursRouter = router({
  getTours: publicProcedure.query(async () => {
    try {
      const tours = await payload.find({
        collection: 'tours',
        pagination: false,
        draft: false,
      })

      return tours?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
  getTourBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input

      try {
        const tour = await payload.find({
          collection: 'tours',
          where: {
            slug: {
              equals: slug,
            },
          },
        })
        return tour?.docs.at(0)
      } catch (error) {}
    }),
})
