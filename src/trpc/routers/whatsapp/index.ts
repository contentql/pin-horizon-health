import { env } from '@env'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

export const messageRouter = router({
  appointmentCreated: publicProcedure
    .input(
      z.object({
        heading: z.string(),
        title: z.string(),
        email: z.string().email(),
        name: z.string(),
        phoneNumber: z.string(),
        meetingStartTime: z.any(),
        meetingEndTime: z.string(),
        meetingUrl: z.string(),
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
        meetingUrl,
        heading,
      } = input
      const sid = env.TWILIO_ACCOUNT_SID
      const auth = env.TWILIO_AUTH_TOKEN
      const client = require('twilio')(sid, auth)
      const body = `
      *${heading} 📅*\n
      *Title:* ${title}\n
      *Name:* ${name}\n
      *Email:* ${email}\n
      *Meeting Start Time:* ${meetingStartTime}\n
      *Meeting End Time:* ${meetingEndTime}\n
      *Meeting URL:*${meetingUrl}
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

  doctorCreated: publicProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
        message: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { message, phoneNumber } = input
      const sid = env.TWILIO_ACCOUNT_SID
      const auth = env.TWILIO_AUTH_TOKEN
      const client = require('twilio')(sid, auth)
      const body = `${message}`
      try {
        await client.messages.create({
          body: body,
          from: 'whatsapp:+14155238886',
          to: `whatsapp:+91${phoneNumber}`,
        })
        return { success: true }
      } catch (error: any) {
        console.error('Error while sending message:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error?.message || 'Failed to send message.',
        })
      }
    }),
})
