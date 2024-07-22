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
  getDoctorsByDepartment: publicProcedure
    .input(z.object({ slug: z.string() }))
    ?.query(async ({ input }) => {
      const { slug } = input
      const department = await payload.find({
        collection: 'department',
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
            'department.value': {
              equals: department?.docs?.at(0)?.id,
            },
          }),
          role: {
            not_equals: 'admin',
          },
        },
      })

      return doctors?.docs
    }),

  getDoctorByName: publicProcedure
    .input(z.object({ doctorName: z.string() }))
    .query(async ({ input }) => {
      const { doctorName } = input

      const doctorDetails = await payload.find({
        collection: 'doctors',
        where: {
          slug: {
            equals: doctorName,
          },
        },
      })
      return doctorDetails.docs.at(0)
    }),
})
