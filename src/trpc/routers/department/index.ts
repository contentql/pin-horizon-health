import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const departmentRouter = router({
  getallDepartments: publicProcedure.query(async () => {
    try {
      const departments = await payload.find({
        collection: 'department',
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
  getDepartmentsByType: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      try {
        const { name } = input
        const departments = await payload.find({
          collection: 'department',
          draft: false,
          where: {
            department_type: {
              contains: name,
            },
          },
        })
        return departments?.docs
      } catch (error) {}
    }),
})
