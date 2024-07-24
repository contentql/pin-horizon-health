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
    .input(z.object({ slug: z.string(), page: z.number() }))
    ?.query(async ({ input }) => {
      const { slug, page } = input
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
        page: page,
        limit: 6,
        depth: 5,

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

      return {
        docs: doctors?.docs,
        meta: {
          hasNextPage: doctors?.hasNextPage,
          hasPrevPage: doctors?.hasPrevPage,
          totalPages: doctors?.totalPages,
        },
      }
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
