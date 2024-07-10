import { Block } from 'payload/types'

export const Features_Block: Block = {
  slug: 'Features',
  // imageURL: '',
  interfaceName: 'FeaturesType',
  labels: {
    singular: 'Features Block',
    plural: 'Features Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
        {
          name: 'icon_image',
          label: 'icon_image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
