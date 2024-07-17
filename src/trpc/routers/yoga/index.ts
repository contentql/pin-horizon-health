import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const yogaRouter = router({
  getallYoga: publicProcedure.query(async () => {
    try {
      const yoga = await payload.find({
        collection: 'yoga',
        depth: 5,
        pagination: false,
        draft: false,
      })
      return yoga?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),

  getYogaByName: publicProcedure
    .input(z.object({ yogaName: z.string() }))
    .query(async ({ input }) => {
      const { yogaName } = input

      const yogaDetails = payload.find({
        collection: 'yoga',
        where: {
          slug: {
            equals: yogaName,
          },
        },
      })
      return (await yogaDetails).docs.at(0)
    }),
})
