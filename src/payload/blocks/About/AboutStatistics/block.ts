import { Block } from 'payload/types'

export const AboutStatistics_Block: Block = {
  slug: 'AboutStatistics',
  // imageURL: '',
  interfaceName: 'AboutStatisticsType',
  labels: {
    singular: 'AboutStatistics Block',
    plural: 'AboutStatistics Blocks',
  },
  fields: [
    {
      name: 'statistics',
      label: 'Statistics',
      type: 'array',
      fields: [
        {
          name: 'number',
          label: 'Number',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },
  ],
}
