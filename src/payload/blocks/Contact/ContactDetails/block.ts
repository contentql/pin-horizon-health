import { Block } from 'payload/types'

export const ContactDetails_Block: Block = {
  slug: 'ContactDetails',

  interfaceName: 'ContactDetailsType',
  labels: {
    singular: 'ContactDetails Block',
    plural: 'ContactDetails Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'contact_info',
      type: 'array',
      label: 'Contact Info',
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
          name: 'contact_icon',
          label: 'Contact Icon',
          type: 'select',
          options: [
            { label: 'Phone', value: '1' },
            { label: 'Stethoscope', value: '2' },
            { label: 'Location', value: '3' },
          ],
        },
      ],
    },
  ],
}
