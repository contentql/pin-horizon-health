import { Block } from 'payload'

export const YogaPosts_Block: Block = {
  slug: 'YogaPosts',
  interfaceName: 'YogaPostsType',
  labels: {
    singular: 'YogaPosts Block',
    plural: 'YogaPosts Blocks',
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
