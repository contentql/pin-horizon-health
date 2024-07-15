import { Block } from 'payload/types'

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
    },

    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'contact image',
      },
    },
  ],
}
