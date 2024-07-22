import { ADMIN_AUTH_GROUP, COLLECTION_SLUG_USER } from '../constants'
import type { CollectionConfig } from 'payload/types'

import {
  ADMIN_ACCESS_ROLES,
  DEFAULT_USER_ROLE,
} from '@/lib/authjs-payload-adapter/auth/config'
import {
  getAuthJsCookieName,
  getCurrentUser,
} from '@/lib/authjs-payload-adapter/auth/edge'
import { revalidateUser } from '@/lib/authjs-payload-adapter/payload/actions'
import { isAdmin, isAdminOrCurrentUser } from '@/payload/access'
import { slugField } from '@/payload/fields'
import parseCookieString from '@/utils/parseCookieString'

export const Doctors: CollectionConfig = {
  slug: 'doctors',
  labels: {
    singular: 'Doctor',
    plural: 'Doctors',
  },
  versions: {
    drafts: true,
  },
  admin: {
    group: ADMIN_AUTH_GROUP,
    useAsTitle: 'name',
  },

  auth: {
    cookies: {
      secure: true,
    },
    strategies: [
      {
        name: 'next-auth',
        authenticate: async ({ headers, payload }) => {
          const currentUser = await getCurrentUser({
            headers,
            payload,
            cache: true,
          })
          if (!currentUser) return null
          return {
            ...currentUser,
            collection: COLLECTION_SLUG_USER,
          }
        },
      },
    ],
  },
  endpoints: [
    {
      path: '/refresh-token',
      method: 'post',
      async handler(request) {
        if (!request?.url)
          return new Response('No request URL provided', { status: 400 })

        const requestUrl = new URL(request.url)
        requestUrl.pathname = '/api/auth/session'

        const newRequest = new Request(requestUrl.toString(), {
          method: 'GET',
          headers: new Headers(request.headers),
        })

        try {
          const response = await fetch(newRequest)
          const data = await response.json()

          if (!response.ok) {
            throw new Error('Failed to refresh token')
          }

          const responseCookies = parseCookieString(
            String(response.headers.get('Set-Cookie') || ''),
          )
          const authCooke = responseCookies?.[getAuthJsCookieName()] ?? null

          const responseBody = JSON.stringify({
            message: 'Token refresh successful',
            refreshToken: authCooke?.value,
            exp:
              authCooke && authCooke?.expires
                ? Math.floor(authCooke.expires.getTime() / 1000)
                : null,
            user: data.user,
          })

          return new Response(responseBody, {
            status: response.status,
            headers: response.headers,
          })
        } catch (error) {
          console.log(error)
          return new Response(
            JSON.stringify({ message: 'Token refresh failed' }),
            { status: 401 },
          )
        }
      },
    },
  ],
  access: {
    admin: async ({ req }) => {
      return ADMIN_ACCESS_ROLES.includes(req?.user?.role || DEFAULT_USER_ROLE)
    },
    read: isAdminOrCurrentUser,
    create: () => true,
    update: isAdmin,
    delete: isAdminOrCurrentUser,
  },
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        if (operation === 'create') {
          const { payload, context } = req

          // this is an aggregation background

          const { totalDocs: totalUsers } = await payload.count({
            collection: 'doctors',
            where: {
              role: {
                equals: 'admin',
              },
            },
          })
          if (context.preventRoleOverride) {
            return data
          }

          if (totalUsers === 0) {
            return { ...data, role: 'admin' }
          }

          return data
        }

        return data
      },
    ],
    afterChange: [
      async ({ doc, req }) => {
        const payload = req.payload
        await revalidateUser(doc, payload)
      },
    ],
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'doctor'],
      defaultValue: 'doctor',
      saveToJWT: true,
    },
    { name: 'emailVerified', type: 'date' },
    {
      name: 'accounts',
      type: 'array',
      saveToJWT: false,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'provider', type: 'text', admin: { readOnly: true } },
            {
              name: 'providerAccountId',
              type: 'text',
              admin: { readOnly: true },
            },
          ],
        },
      ],
    },
    {
      name: 'verificationTokens',
      type: 'array',
      saveToJWT: false,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'identifier', type: 'text', admin: { readOnly: true } },
            { name: 'token', type: 'text', admin: { readOnly: true } },
            { name: 'expires', type: 'date', admin: { readOnly: true } },
          ],
        },
      ],
    },
    {
      type: 'tabs',

      tabs: [
        // doctor personal details tab
        {
          label: 'Personal Details',
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              saveToJWT: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'designation',
                  label: 'Designation',
                  type: 'text',
                },
              ],
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
            },
            {
              name: 'doctor_image',
              label: 'Doctor Image',
              type: 'upload',
              saveToJWT: true,
              relationTo: 'media',
              admin: {
                description: 'upload doctor image',
              },
            },
          ],
        },
        // eduction qualification tab
        {
          label: 'Education Qualifications',
          fields: [
            {
              name: 'qualifications',
              type: 'array',
              fields: [
                {
                  type: 'select',
                  name: 'qualification',
                  label: 'Qualification',
                  options: [
                    {
                      label: 'High School Diploma',
                      value: 'High School Diploma',
                    },
                    {
                      label: 'Bachelor’s Degree',
                      value: 'Bachelor’s Degree',
                    },
                    {
                      label: 'Medical Degree (MD/DO)',
                      value: 'Medical Degree (MD/DO)',
                    },
                    {
                      label: 'Residency',
                      value: 'Residency',
                    },
                  ],
                },
                {
                  name: 'institute',
                  label: 'Institute',
                  type: 'text',
                },
                {
                  name: 'year',
                  label: 'Year',
                  type: 'date',
                },
                {
                  name: 'specialization',
                  label: 'Major/Specialization',
                  type: 'text',
                },
              ],
            },
          ],
        },
        // awards tabs
        {
          label: 'Experience/Achievements',
          fields: [
            {
              name: 'experience',
              type: 'array',
              label: 'Experience',
              fields: [
                {
                  name: 'title',
                  type: 'textarea',
                  label: 'Title',
                },
              ],
            },
            {
              name: 'achievements',
              type: 'array',
              label: 'Awards/Achievements',
              fields: [
                {
                  name: 'title',
                  type: 'textarea',
                  label: 'Title',
                },
              ],
            },
          ],
        },
        // contact info
        {
          label: 'Contact Details',
          fields: [
            {
              name: 'phone_number',
              label: 'Phone Number',
              type: 'number',
            },

            {
              type: 'row',
              fields: [
                {
                  name: 'linkedin',
                  type: 'text',
                  label: 'Linkedin Url',
                },
                {
                  name: 'twitter',
                  type: 'text',
                  label: 'Twitter Url',
                },
                {
                  name: 'facebook',
                  type: 'text',
                  label: 'Facebook Url',
                },
              ],
            },
          ],
        },
      ],
    },
    slugField('name'),
    {
      name: 'department',
      label: 'Department',
      type: 'relationship',
      relationTo: ['department'],
      filterOptions: ({ relationTo, data, siblingData }) => {
        return {
          department_type: {
            contains: 'Doctor',
          },
        }
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'cal_user',
      label: 'Cal User Name',
      type: 'text',
      admin: {
        description: 'paste the doctor cal user name here',
        position: 'sidebar',
      },
    },
  ],
}
