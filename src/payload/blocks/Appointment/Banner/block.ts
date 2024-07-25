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
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Doctor image',
      },
    },
  ],
}
