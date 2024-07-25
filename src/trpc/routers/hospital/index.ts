import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const hospitalRouter = router({
  getallHospitals: publicProcedure.query(async () => {
    try {
      const hospitals = await payload.find({
        collection: 'hospital',
        depth: 5,
        pagination: false,
        draft: false,
      })
      return hospitals?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
  getHospitalByCountry: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input
      try {
        if (slug === 'all') {
          const hospitals = await payload.find({
            collection: 'hospital',
            draft: false,
          })
          return hospitals?.docs
        }
        const hospitals = await payload.find({
          collection: 'hospital',
          where: {
            'country.country': {
              equals: slug,
            },
          },
          draft: false,
        })
        return hospitals?.docs
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
  getAllCountriesOfHospitals: publicProcedure.query(async () => {
    try {
      const countries = await payload.find({
        collection: 'country',
        depth: 5,

        draft: false,
      })
      return countries?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
  getHospitalByName: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input
      try {
        const hospital = await payload.find({
          collection: 'hospital',
          where: {
            slug: {
              equals: slug,
            },
          },
          draft: false,
        })

        return { ...hospital?.docs?.at(0) }
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
})
