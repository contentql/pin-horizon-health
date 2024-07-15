import { Block } from 'payload/types'

import { slugField } from '@/payload/fields'

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

    slugField(),
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
