import { revalidateUser } from '../payload/actions'
import { Doctor } from '@payload-types'
import NextAuth from 'next-auth'
import { getFieldsToSign as getFieldsToSignPayload } from 'payload/auth'
import 'server-only'

import { getPayload } from '@/lib/authjs-payload-adapter/payload'
import { Doctors } from '@/payload/collections/Doctors'
import { COLLECTION_SLUG_USER } from '@/payload/collections/constants'

import { PayloadAdapter } from './adapter'
import authConfig, { PAYLOAD_ADAPTER_CONFIG } from './config'

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth(
  () => {
    const payload = getPayload()
    return {
      adapter: PayloadAdapter(payload, PAYLOAD_ADAPTER_CONFIG),
      callbacks: {
        async jwt({ token, user }) {
          const userId = (token?.id || token?.sub || user?.id) as
            | string
            | number
          const dbUser = await (
            await payload
          ).findByID({
            collection: COLLECTION_SLUG_USER,
            id: userId,
          })
          const fieldsToSign = getFieldsToSignPayload({
            // @ts-ignore
            user: dbUser,
            email: dbUser.email as string,
            collectionConfig: Doctors,
          })
          token = {
            ...token,
            ...(fieldsToSign || {}),
          }
          return token
        },
        async session({ session, token }) {
          session.user = session.user || {}
          if (!token) return session
          const fieldsToSign = getFieldsToSignPayload({
            // @ts-ignore
            user: token,
            email: session.user.email,
            collectionConfig: Doctors,
          })

          session.user = {
            ...fieldsToSign,
            ...session.user,
            // @ts-ignore
            collection: COLLECTION_SLUG_USER,
          }

          return session
        },
        async signIn({ user }) {
          revalidateUser(user as Doctor, payload as any)
          return true
        },
      },
      ...authConfig,
    }
  },
)
