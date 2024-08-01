import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { TravelFormValidator } from '@/lib/validator/TravelFormValidator'
import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const touristsRouter = router({
  postTouristFormData: publicProcedure
    .input(TravelFormValidator)
    .mutation(async ({ input }) => {
      const { email, name, date, message, phoneNumber, no_of_persons } = input

      try {
        await payload.create({
          collection: 'tourists',
          data: { email, name, date, message, phoneNumber, no_of_persons },
        })

        return { success: 'true' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),
})
