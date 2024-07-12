import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

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
})
