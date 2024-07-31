import { Block } from 'payload'

export const AyurvedaHero_Block: Block = {
  slug: 'AyurvedaHero',
  interfaceName: 'AyurvedaHeroType',
  labels: {
    singular: 'AyurvedaHero Block',
    plural: 'AyurvedaHero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Enter title for hero section',
      },
    },
    {
      name: 'sub_title',
      type: 'textarea',
      label: 'Sub Title',
      required: true,
      admin: {
        description: 'Enter sub title for hero section',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
      admin: {
        description: 'Upload an image for hero section',
      },
    },
  ],
}
