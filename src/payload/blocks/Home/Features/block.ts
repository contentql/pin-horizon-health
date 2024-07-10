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
          name: 'feature_icon',
          label: 'Feature Icon',
          type: 'select',
          options: [
            { label: 'Compassion', value: '1' },
            { label: 'Excellence', value: '2' },
            { label: 'Integrity', value: '3' },
            { label: 'Respect', value: '4' },
            { label: 'Teamwork', value: '5' },
          ],
        },
      ],
    },
  ],
}
