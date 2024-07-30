import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { TouristsFormValidator } from '@/lib/validator/touristsValidator'
import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const touristsRouter = router({
  postTouristFormData: publicProcedure
    .input(TouristsFormValidator)
    .mutation(async ({ input }) => {
      const { email, name, date } = input

      try {
        await payload.create({
          collection: 'tourists',
          data: { email, name, date },
        })

        return { success: 'true' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),
})
