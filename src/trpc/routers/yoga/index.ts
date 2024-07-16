import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const yogaRouter = router({
  getallYoga: publicProcedure.query(async () => {
    try {
      const departments = await payload.find({
        collection: 'yoga',
        depth: 5,
        pagination: false,
        draft: false,
      })
      return departments?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
