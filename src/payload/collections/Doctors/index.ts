import { ADMIN_AUTH_GROUP } from '../constants'
import type { CollectionConfig } from 'payload'

import { isAdmin, isAdminOrCurrentUser } from '@/payload/access'
import { slugField } from '@/payload/fields'

import { self } from './access/self'

const DEFAULT_USER_ROLE = 'doctor'
const ADMIN_ACCESS_ROLES = ['admin', 'doctor']

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
  },

  access: {
    admin: async ({ req }) => {
      return ADMIN_ACCESS_ROLES.includes(req?.user?.role || DEFAULT_USER_ROLE)
    },
    read: isAdminOrCurrentUser,
    create: self,
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
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'doctor'],
      defaultValue: 'doctor',
      saveToJWT: true,
      admin: {
        description:
          'Select the role for the user, choosing either Doctor or Admin (with admin panel access)',
      },
    },
    { name: 'emailVerified', type: 'date' },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      saveToJWT: true,
      required: true,
      admin: {
        description: ' Enter the name of the doctor ',
      },
    },

    {
      type: 'tabs',

      tabs: [
        // doctor personal details tab
        {
          label: 'Personal Details',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'designation',
                  label: 'Designation',
                  type: 'text',
                  admin: {
                    description: 'Doctor Designation',
                  },
                },
              ],
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
              admin: {
                description:
                  'Provide a description or additional details about the doctor',
              },
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
                  admin: {
                    description: 'select Qualification',
                  },
                },
                {
                  name: 'institute',
                  label: 'Institute',
                  type: 'text',
                  admin: {
                    description:
                      'Specify the name of the institute or organization where the doctor received their education or training',
                  },
                },
                {
                  name: 'year',
                  label: 'Year',
                  type: 'date',
                  admin: {
                    description:
                      'Enter the year in which the doctor graduated or completed their education at the institute',
                  },
                },
                {
                  name: 'specialization',
                  label: 'Major/Specialization',
                  type: 'text',
                  admin: {
                    description:
                      'Specify the area of medical specialization or expertise of the doctor.',
                  },
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
                  admin: {
                    description:
                      'Provide details about the doctor professional experience, including roles, responsibilities, and duration',
                  },
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
                  admin: {
                    description:
                      'List any awards or achievements the doctor has received, highlighting notable accomplishments and recognitions.',
                  },
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
              admin: {
                description: 'Enter the doctor contact phone number',
              },
            },

            // {
            //   type: 'row',
            //   fields: [
            //     {
            //       name: 'linkedin',
            //       type: 'text',
            //       label: 'Linkedin Url',
            //     },
            //     {
            //       name: 'twitter',
            //       type: 'text',
            //       label: 'Twitter Url',
            //     },
            //     {
            //       name: 'facebook',
            //       type: 'text',
            //       label: 'Facebook Url',
            //     },
            //   ],
            // },
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
      // filterOptions: ({ relationTo, data, siblingData }) => {
      //   return {
      //     department_type: {
      //       contains: 'Doctor',
      //     },
      //   }
      // },
      admin: {
        position: 'sidebar',
        description:
          'Select the department to which the doctor belongs from the available options',
      },
    },
    {
      name: 'cal_user',
      label: 'Cal User Name',
      type: 'text',
      admin: {
        position: 'sidebar',
        description:
          "After successfully creating the doctor profile, send a Cal invitation link to the doctor's email. Once the doctor registers, get their username from the doctor and enter their Cal username here.",
      },
    },
  ],
}
