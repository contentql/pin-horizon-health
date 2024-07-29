import { Block } from 'payload'

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
      admin: {
        description: 'Enter title for services section',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter sub title for services section',
      },
    },
    {
      name: 'services',
      label: 'Services',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          required: true,
          type: 'text',
          admin: {
            description: 'Enter service title which exists in services',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter sub title for service',
          },
        },
        {
          name: 'service_path',
          label: 'Service Path',
          required: true,
          type: 'text',
          admin: {
            description: 'Enter Redirecting page name',
          },
        },
      ],
      admin: {
        description: 'Add your services',
      },
    },
  ],
}
