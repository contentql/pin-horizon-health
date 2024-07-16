import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'

export const Doctors: CollectionConfig = {
  slug: 'doctors',
  labels: {
    singular: 'Doctor',
    plural: 'Doctors',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
  },
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
              required: true,
              unique: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'designation',
                  label: 'Designation',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'doctor_image',
              label: 'Doctor Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
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
                  required: true,
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
              required: true,
            },
            {
              name: 'mail',
              label: 'Email',
              type: 'email',
              required: true,
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
      required: true,
      // filterOptions: ({ relationTo, data }) => {
      //   console.log('doctors', data)
      //   if (relationTo === 'department') {
      //     console.log('first')
      //     return {
      //       department_type: {
      //         contains: 'Doctor',
      //       },
      //     }
      //   } else {
      //     console.log('second')
      //     return false
      //   }
      // },
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
