import { Block } from 'payload/types'

export const AboutAwards_Block: Block = {
  slug: 'AboutAwards',
  // imageURL: '',
  interfaceName: 'AboutAwardsType',
  labels: {
    singular: 'AboutAwards Block',
    plural: 'AboutAwards Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
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
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
