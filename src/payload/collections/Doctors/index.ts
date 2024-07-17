import type { CollectionConfig } from 'payload/types'

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

  fields: [
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
