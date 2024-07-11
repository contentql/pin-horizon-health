import { Block } from 'payload/types'

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
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
        },
        {
          name: 'award_image',
          label: 'Award Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
