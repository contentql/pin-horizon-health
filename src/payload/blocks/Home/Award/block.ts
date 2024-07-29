import { Block } from 'payload'

export const Award_Block: Block = {
  slug: 'Award',
  // imageURL: '',
  interfaceName: 'AwardType',
  labels: {
    singular: 'Award Block',
    plural: 'Award Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Add Award Section Title',
      },
    },
    {
      name: 'awards',
      label: 'Awards',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          admin: {
            description: 'add award title',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          admin: {
            description: 'add award sub title',
          },
        },
        {
          name: 'award_image',
          label: 'Award Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload award Image',
          },
        },
      ],
      admin: {
        description: 'Add your Awards',
      },
    },
  ],
}
