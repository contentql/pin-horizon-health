import { Block } from 'payload'

export const ContactBanner_Block: Block = {
  slug: 'ContactBanner',

  interfaceName: 'ContactBannerType',
  labels: {
    singular: 'ContactBanner Block',
    plural: 'ContactBanner Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      admin: {
        description: 'Enter title for hero section',
      },
    },

    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      admin: {
        description: 'Enter sub title for hero section',
      },
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an image for hero section',
      },
    },
  ],
}
