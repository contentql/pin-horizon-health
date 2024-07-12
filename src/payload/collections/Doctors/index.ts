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
                  name: 'department',
                  label: 'Department',
                  type: 'text',
                  required: true,
                },
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
          ],
        },
      ],
    },
    slugField('name'),
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
      label: 'Category',
      required: true,
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}