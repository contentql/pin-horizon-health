import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const categoryRouter = router({
  getallCategories: publicProcedure.query(async () => {
    try {
      const categories = await payload.find({
        collection: 'category',
        depth: 5,
        pagination: false,
        draft: false,
      })
      return categories?.docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
