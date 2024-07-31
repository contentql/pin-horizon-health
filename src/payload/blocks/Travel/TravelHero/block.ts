import { Block } from 'payload'

export const Travel_Hero_Block: Block = {
  slug: 'TravelHero',
  interfaceName: 'TravelHeroType',
  labels: {
    singular: 'Travel Hero Block',
    plural: 'Travel Hero Blocks',
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
      name: 'imgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
      admin: {
        description: 'Upload an image for hero section',
      },
    },
    {
      name: 'bgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Upload background image for hero section',
      },
    },
  ],
}
