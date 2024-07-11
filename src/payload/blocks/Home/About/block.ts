import { Block } from 'payload/types'

export const About_Block: Block = {
  slug: 'About',
  // imageURL: '',
  interfaceName: 'AboutType',
  labels: {
    singular: 'About Block',
    plural: 'About Blocks',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'spin_image',
      label: 'Spin Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'spin_logo',
      label: 'Spin logo',
      type: 'upload',
      relationTo: 'media',
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
