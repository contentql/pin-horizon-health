import { Block } from 'payload'

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
      admin: {
        description: 'Enter title for contact details section',
      },
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
          required: true,
          admin: {
            description:
              'Enter title for contact details (Ex: Email, Location, Phone)',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter your value for above title',
          },
        },
        {
          name: 'contact_icon',
          label: 'Contact Icon',
          required: true,
          type: 'select',
          options: [
            { label: 'Phone', value: '1' },
            { label: 'Stethoscope', value: '2' },
            { label: 'Location', value: '3' },
          ],
          admin: {
            description: 'Select icon for contact details',
          },
        },
      ],
      admin: {
        description: 'Add your Contact details',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        description: 'Enter your location to show on map',
      },
    },
  ],
}
