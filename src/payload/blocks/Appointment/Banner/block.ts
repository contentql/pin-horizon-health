import { Block } from 'payload/types'

export const Appointment_Banner_Block: Block = {
  slug: 'AppointmentBanner',

  interfaceName: 'AppointmentBannerType',
  labels: {
    singular: 'Appointment Banner Block',
    plural: 'Appointment Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter title for Appointment hero section',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Enter description for Appointment hero section',
      },
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload an image for Appointment hero section',
      },
    },
  ],
}
