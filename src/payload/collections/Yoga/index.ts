import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'

export const Yoga: CollectionConfig = {
  slug: 'yoga',
  labels: {
    singular: 'Yoga',
    plural: 'Yoga',
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
      name: 'yoga_image',
      label: 'Yoga Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload yoga image',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
    },
    slugField('name'),
    {
      name: 'description',
      type: 'richText',
      label: 'Content',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          HTMLConverterFeature({}),
        ],
      }),
      admin: {
        description:
          'Main content of the blog post. Use the rich text editor for formatting.',
      },
    },
    lexicalHTML('description', {
      name: 'description_html',
    }),
  ],
}
