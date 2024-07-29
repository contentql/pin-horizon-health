import { Block } from 'payload'

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
      admin: {
        description: 'Upload an image for about section',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      admin: {
        description: 'Enter title for about section',
      },
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
          admin: {
            description: 'Enter ayurveda about point title',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          admin: {
            description: 'Enter ayurveda about point description',
          },
        },
      ],
      admin: {
        description: 'Add ayurveda about points',
      },
    },
  ],
}
