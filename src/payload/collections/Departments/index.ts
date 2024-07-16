import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'

export const Departments: CollectionConfig = {
  slug: 'department',
  labels: {
    singular: 'Department',
    plural: 'Departments',
  },
  access: {
    read: () => true,
  },

  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'department_type',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Doctor', value: 'Doctor' },
        { label: 'Hospital', value: 'Hospital' },
        { label: 'Yoga', value: 'Yoga' },
        { label: 'Travel', value: 'Travel' },
      ],
    },
    slugField(),
  ],
}
