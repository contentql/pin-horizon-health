import { Block } from 'payload/types'

export const Contact_Banner_Block: Block = {
  slug: 'Contact',

  interfaceName: 'ContactBannerType',
  labels: {
    singular: 'Contact Banner Block',
    plural: 'Contact Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'contact image',
      },
    },
  ],
}
