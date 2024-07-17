import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { AppointmentValidator } from '@/lib/validator/appointmentValidator'
import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const appointmentRouter = router({
  postAppointmentData: publicProcedure
    .input(AppointmentValidator)
    .mutation(async ({ ctx, input }) => {
      console.log(input)
      const {
        medicalRecordNumber,
        name,
        phoneNumber,
        department,
        preferredDateAndTime,
        gender,
        reasonForVisit,
        doctorId,
      } = input
      console.log('Inputt', preferredDateAndTime)
      try {
        await payload.create({
          collection: 'appointments',
          data: {
            name,
            medicalRecordNumber,
            phoneNumber,
            department,
            preferredDateAndTime,
            gender,
            reason: reasonForVisit,
            doctor: doctorId,
          },
        })

        return { success: 'true' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),
})
