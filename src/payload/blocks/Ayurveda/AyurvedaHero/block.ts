import { Block } from 'payload/types'

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
    },
    {
      name: 'sub_title',
      type: 'textarea',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
  ],
}
