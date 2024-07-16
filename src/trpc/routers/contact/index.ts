import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { ContactFormValidator } from '@/lib/validator/contactValidator'
import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const contactRouter = router({
  ContactFormPostData: publicProcedure
    .input(ContactFormValidator)
    .mutation(async ({ input }) => {
      console.log('Data', input)
      const { email, message, name, subject, phoneNumber } = input

      try {
        await payload.create({
          collection: 'contact',
          data: { email, message, name, subject, phoneNumber },
        })

        return { success: 'true' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),
})
