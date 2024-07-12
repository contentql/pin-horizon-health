import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'

export const Category: CollectionConfig = {
  slug: 'category',
  labels: {
    singular: 'Category',
    plural: 'Categories',
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
    slugField(),
  ],
}
