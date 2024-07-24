import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'
import { visibleToAdminOnly } from '@/payload/hidden'

export const Hospitals: CollectionConfig = {
  slug: 'hospital',
  labels: {
    singular: 'Hospital',
    plural: 'Hospitals',
  },
  access: {
    read: () => true,
  },

  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    hidden: visibleToAdminOnly,
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
    },
    {
      name: 'gallery',
      label: 'Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
    },
    {
      name: 'services',
      label: 'Services',
      type: 'array',
      fields: [
        {
          name: 'service',
          label: 'Service',
          type: 'text',
        },
      ],
    },
    {
      name: 'receptionistName',
      label: 'Receptionist Name',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'number',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'highlights',
      label: 'Highlights',
      type: 'array',
      fields: [
        {
          name: 'highlight',
          label: 'Highlights',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'achievements',
      label: 'Achievements',
      type: 'array',
      fields: [
        {
          name: 'achievement',
          label: 'Achievement',
          type: 'textarea',
        },
      ],
    },
    slugField(),
  ],
}
