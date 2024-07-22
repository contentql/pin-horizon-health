import { env } from '@env'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

export const messageRouter = router({
  appointmentCreated: publicProcedure
    .input(
      z.object({
        title: z.string(),
        email: z.string().email(),
        name: z.string(),
        phoneNumber: z.string(),
        meetingStartTime: z.any(),
        meetingEndTime: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const {
        name,
        title,
        email,
        meetingEndTime,
        phoneNumber,
        meetingStartTime,
      } = input
      const sid = env.TWILIO_ACCOUNT_SID
      const auth = env.TWILIO_AUTH_TOKEN
      const client = require('twilio')(sid, auth)
      const body = `
      New Appointment
      Title:${title}
        Name: ${name}
        Email:${email}
        Meeting Start Time: ${meetingStartTime}
        Meeting End Time: ${meetingEndTime}
        `

      try {
        const senderData = await client.messages.create({
          body: body,
          from: 'whatsapp:+14155238886',
          to: `whatsapp:+91${phoneNumber}`,
        })
        return senderData
      } catch (error: any) {
        console.error('Error while sending message:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error?.message || 'Failed to send message.',
        })
      }
    }),
})
