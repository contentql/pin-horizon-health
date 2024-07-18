import { Block } from 'payload/types'

export const AyurvedaAbout_Block: Block = {
  slug: 'AyurvedaAbout',
  // imageURL: '',
  interfaceName: 'AyurvedaAboutType',
  labels: {
    singular: 'AyurvedaAbout Block',
    plural: 'AyurvedaAbout Blocks',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'points',
      label: 'Points',
      type: 'array',
      fields: [
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
      ],
    },
  ],
}
