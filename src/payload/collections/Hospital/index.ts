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
      admin: {
        description: 'Enter hospital name',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      admin: {
        description: 'Enter description about hospital',
      },
    },
    {
      name: 'country',
      relationTo: 'country',
      type: 'relationship',
      admin: {
        description:
          'Select country where hospital is located if country not exist add your country by clicking "+" button',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        description: 'Enter hospital address',
      },
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
          admin: {
            description: 'Upload hospital related images',
          },
        },
      ],
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
      admin: {
        description: 'Add your services',
      },
    },
    {
      name: 'receptionistName',
      label: 'Receptionist Name',
      type: 'text',
      admin: {
        description: 'Enter receptionist name',
      },
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'number',
      required: true,
      admin: {
        description: 'Enter hospital contact number',
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      admin: {
        description: 'Enter hospital mail',
      },
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
      admin: {
        description: 'Add your hospital highlights information',
      },
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
      admin: {
        description: 'Add your hospital achievements',
      },
    },
    slugField(),
  ],
}
