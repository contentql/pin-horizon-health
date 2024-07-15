import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const doctorRouter = router({
  getallDoctors: publicProcedure.query(async () => {
    try {
      const doctors = await payload.find({
        collection: 'doctors',
        depth: 5,
        pagination: false,
        draft: false,
      })
      return doctors?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
  getDoctorsByCategory: publicProcedure
    .input(z.object({ slug: z.string() }))
    ?.query(async ({ input }) => {
      const { slug } = input
      const categoryId = await payload.find({
        collection: 'category',
        where: {
          slug: {
            equals: slug,
          },
        },
      })

      const doctors = await payload.find({
        collection: 'doctors',
        draft: false,
        depth: 5,
        pagination: false,
        where: {
          ...(slug !== 'all' && {
            'category.value': {
              equals: categoryId?.docs?.at(0)?.id,
            },
          }),
        },
      })

      return doctors?.docs
    }),

  getDoctorByName: publicProcedure
    .input(z.object({ doctorName: z.string() }))
    .query(async ({ input }) => {
      const { doctorName } = input

      const doctorDetails = payload.find({
        collection: 'doctors',
        where: {
          slug: {
            equals: doctorName,
          },
        },
      })
      return (await doctorDetails).docs.at(0)
    }),
})
