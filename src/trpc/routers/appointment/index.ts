import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { AppointmentValidator } from '@/lib/validator/appointmentValidator'
import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const appointmentRouter = router({
  postAppointmentData: publicProcedure
    .input(AppointmentValidator)
    .mutation(async ({ ctx, input }) => {
      const {
        metadata,
        doctorEmail,
        description,
        endDate,
        notes,
        title,
        startDate,
        bookingStatus,
        uid,
        attendeeEmail,
        attendeeName,
      } = input
      try {
        const doctor = await payload.find({
          collection: 'doctors',
          where: {
            email: {
              equals: doctorEmail,
            },
          },
        })
        await payload.create({
          collection: 'appointments',
          data: {
            title: title,
            attendee_name: attendeeName,
            attendee_email: attendeeEmail,
            description: description,
            additional_notes: notes,
            start_time: startDate,
            end_time: endDate,
            booking_status: bookingStatus,
            metadata: { ...metadata },
            uid: uid,
            doctor: {
              relationTo: 'doctors',
              value: doctor?.docs.at(0)?.id as string,
            },
          },
        })

        return { success: 'true' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),

  cancelAppointment: publicProcedure
    .input(z.object({ status: z.string(), uid: z.string() }))
    .mutation(async ({ input }) => {
      const { status, uid } = input
      try {
        await payload.update({
          collection: 'appointments',
          data: {
            booking_status: status,
          },
          where: {
            uid: {
              equals: uid,
            },
          },
        })
        return { status: 'success' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),

  rescheduleAppointment: publicProcedure
    .input(
      z.object({
        rescheduleStartTime: z.any(),
        rescheduleEndTime: z.any(),
        uid: z.string(),
        status: z.string(),
        rescheduleUid: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const {
        rescheduleEndTime,
        rescheduleStartTime,
        uid,
        rescheduleUid,
        status,
      } = input
      try {
        await payload.update({
          collection: 'appointments',
          data: {
            booking_status: status,
            start_time: rescheduleStartTime,
            end_time: rescheduleEndTime,
            uid: uid,
          },
          where: {
            uid: {
              equals: rescheduleUid,
            },
          },
        })
        return { status: 'success' }
      } catch (error: any) {
        console.error(error)
        throw new Error(error.message)
      }
    }),
})
