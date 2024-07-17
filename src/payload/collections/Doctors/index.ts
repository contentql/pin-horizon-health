import type { CollectionConfig } from 'payload/types'

import {
  ADMIN_ACCESS_ROLES,
  DEFAULT_USER_ROLE,
} from '@/lib/authjs-payload-adapter/auth/config'
import { isAdmin, isAdminOrCurrentUser } from '@/payload/access'
import { slugField } from '@/payload/fields'

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
    useAsTitle: 'name',
  },

  auth: true,
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

          if (totalUsers === 0) {
            return { ...data, role: 'admin' }
          }

          return data
        }

        return data
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
  ],
}
