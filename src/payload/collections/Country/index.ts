import type { CollectionConfig } from 'payload'

import { slugField } from '@/payload/fields/slug'

export const Country: CollectionConfig = {
  slug: 'country',
  labels: {
    singular: 'Country',
    plural: 'Country',
  },
  access: {
    read: () => true,
  },

  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'country',
    hidden: true,
  },

  fields: [
    {
      name: 'country',
      label: 'Country',
      type: 'text',
    },

    slugField({ fieldToUse: 'country' }),
  ],
}
