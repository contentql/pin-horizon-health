import { Block } from 'payload/types'

export const AboutServices_Block: Block = {
  slug: 'AboutServices',
  // imageURL: '',
  interfaceName: 'AboutServicesType',
  labels: {
    singular: 'AboutServices Block',
    plural: 'AboutServices Blocks',
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
      name: 'services',
      label: 'Services',
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
