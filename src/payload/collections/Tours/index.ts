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
              admin: {
                description:
                  "Enter the title of the tour (e.g., 'Guided City Tour')",
              },
            },
            {
              name: 'hero_url',
              type: 'upload',
              label: 'Image',
              relationTo: 'media',
              admin: {
                description:
                  'Upload a hero image for the tour card to visually represent the tour',
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
                    description:
                      'Upload gallery images to showcase various aspects of the tour, providing a visual preview of the experience',
                  },
                },
              ],
            },
            {
              name: 'description',
              label: 'Description',
              type: 'richText',
              admin: {
                description:
                  'Provide a brief overview of the tour, highlighting key features and attractions',
              },
            },
            {
              name: 'price',
              label: 'Price',
              type: 'number',
              admin: {
                description: 'Enter the price for the tour (e.g., 2000)',
              },
            },
            {
              name: 'duration',
              label: 'Duration',
              type: 'text',
              admin: {
                description:
                  'Specify the duration of the tour (e.g., 2 days 1 night)',
              },
            },
            {
              name: 'location',
              label: 'Location',
              type: 'text',
              admin: {
                description:
                  'Enter the location where the tour takes place (e.g., city, landmark, or venue)',
              },
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
              admin: {
                description:
                  'List the services included in the tour (e.g., guided tours, transportation, meals).',
              },
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
              admin: {
                description:
                  'Outline the main attractions and standout features of the tour',
              },
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
        {
          label: 'Guide Details',
          fields: [
            {
              name: 'guide_name',
              label: 'Name',
              type: 'text',
              required: true,
              admin: {
                description:
                  'Enter the name of the tour guide who will lead the tour',
              },
            },
            {
              name: 'guide_phone',
              label: 'Phone Number',
              type: 'number',
              required: true,
              admin: {
                description:
                  'Provide the phone number of the tour guide for contact during the tour',
              },
            },
            {
              name: 'guide_email',
              label: 'Email',
              type: 'email',
              admin: {
                description:
                  'Enter the email address of the tour guide for communication and inquiries.',
              },
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
