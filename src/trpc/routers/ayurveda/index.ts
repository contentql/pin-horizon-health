import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const ayurvedaRouter = router({
  getAllAyurveda: publicProcedure.query(async () => {
    try {
      const ayurveda = await payload.find({
        collection: 'ayurveda',
        depth: 5,
        pagination: false,
        draft: false,
      })
      return ayurveda?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),

  getAyurvedaByName: publicProcedure
    .input(z.object({ ayurvedaName: z.string() }))
    .query(async ({ input }) => {
      const { ayurvedaName } = input

      const ayurvedaDetails = payload.find({
        collection: 'ayurveda',
        where: {
          slug: {
            equals: ayurvedaName,
          },
        },
      })
      return (await ayurvedaDetails).docs.at(0)
    }),
})
