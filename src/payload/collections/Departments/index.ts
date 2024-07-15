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
    slugField(),
  ],
}
