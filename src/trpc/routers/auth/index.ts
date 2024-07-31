import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { TRPCError } from '@trpc/server'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const authRouter = router({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        imageUrl: z.string().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { name, email, password, imageUrl } = input

      try {
        // Check if email already exists
        const emailExists = await payload.find({
          collection: 'doctors',
          where: {
            email: {
              equals: email,
            },
          },
        })

        if (emailExists.totalDocs > 0) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'Email already exists',
          })
        }

        const result = await payload.create({
          collection: 'doctors',
          data: {
            email,
            password,
            name,
          },
          locale: undefined,
          fallbackLocale: undefined,
          overrideAccess: true,
          disableVerificationEmail: true, // Set to false if you want to enable verification email
        })

        const loginResult = await payload.login({
          collection: 'doctors',
          data: {
            email,
            password,
          },
          depth: 2,
          locale: undefined,
          fallbackLocale: undefined,
          overrideAccess: false,
          showHiddenFields: true,
        })
        const cookieStore = cookies()
        cookieStore.set('payload-token', loginResult.token || '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        })

        return result
      } catch (error: any) {
        console.error('Error signing up:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        })
      }
    }),

  signIn: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input

      try {
        const result = await payload.login({
          collection: 'doctors',
          data: {
            email,
            password,
          },
          depth: 2,
          locale: undefined,
          fallbackLocale: undefined,
          overrideAccess: false,
          showHiddenFields: true,
        })
        const cookieStore = cookies()
        cookieStore.set('payload-token', result.token || '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        })

        return result
      } catch (error: any) {
        console.error('Error signing in:', error)
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid email or password',
        })
      }
    }),

  forgotPassword: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email } = input

      try {
        const token = await payload.forgotPassword({
          collection: 'doctors',
          data: {
            email,
          },
        })

        const { docs: users, totalDocs: usersCount } = await payload.find({
          collection: 'doctors',
          where: {
            email: {
              equals: email,
            },
          },
        })

        if (!usersCount) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'User not found',
          })
        }

        const user = users.at(0)

        // if (env.RESEND_SENDER_EMAIL && user?.name) {
        //   await sendResetPasswordEmail(email, user?.name, token)
        // }

        return { success: true, token }
      } catch (error: any) {
        console.error('Error during forgot password:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        })
      }
    }),

  resetPassword: publicProcedure
    .input(
      z.object({
        password: z.string(),
        token: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { password, token } = input

      try {
        const result = await payload.resetPassword({
          collection: 'doctors',
          data: {
            password,
            token,
          },
          overrideAccess: false,
        })

        return result
      } catch (error: any) {
        console.error('Error resetting password:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        })
      }
    }),

  unlock: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email } = input

      try {
        const result = await payload.unlock({
          collection: 'doctors',
          data: {
            email,
          },
          overrideAccess: true,
        })

        return { success: result }
      } catch (error: any) {
        console.error('Error unlocking user:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        })
      }
    }),

  verifyEmail: publicProcedure
    .input(
      z.object({
        token: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { token } = input

      try {
        const result = await payload.verifyEmail({
          collection: 'doctors',
          token,
        })

        return { success: result }
      } catch (error: any) {
        console.error('Error verifying email:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        })
      }
    }),
})
