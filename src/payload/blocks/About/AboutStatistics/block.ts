import { Block } from 'payload'

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
          required: true,
          admin: {
            description: 'Enter your count with Character (Ex:10+)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
          admin: {
            description: 'Enter count related title',
          },
        },
      ],
      admin: {
        description: 'Add your application statistics',
      },
    },
  ],
}
