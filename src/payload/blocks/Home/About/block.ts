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
      admin: {
        description: 'upload about section Image',
      },
    },
    {
      name: 'spin_image',
      label: 'Spin Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'upload Image for rotate',
      },
    },
    {
      name: 'spin_logo',
      label: 'Spin logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'upload logo image',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      admin: {
        description: 'add about section title',
      },
    },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      admin: {
        description: 'add about section sub title',
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
            description: 'add about point title',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          admin: {
            description: 'add about point sub title',
          },
        },
      ],
      admin: {
        description: 'Add about points',
      },
    },
  ],
}
