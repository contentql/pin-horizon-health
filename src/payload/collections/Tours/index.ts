import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'

export const Tours: CollectionConfig = {
  slug: 'tours',
  labels: {
    singular: 'Tour',
    plural: 'Tours',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 10,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'hero_url',
              type: 'upload',
              label: 'Image',
              relationTo: 'media',
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
              name: 'description',
              label: 'Description',
              type: 'richText',
            },
            {
              name: 'price',
              label: 'Price',
              type: 'number',
            },
            {
              name: 'duration',
              label: 'Duration',
              type: 'text',
            },
            {
              name: 'location',
              label: 'Location',
              type: 'text',
            },
          ],
        },
        {
          label: 'Services',
          fields: [
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
          ],
        },
      ],
    },
    slugField(),
  ],
}
