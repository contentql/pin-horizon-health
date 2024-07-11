import { Block } from 'payload/types'

export const Appointment_Block: Block = {
  slug: 'Appointment',
  // imageURL: '',
  interfaceName: 'AppointmentType',
  labels: {
    singular: 'Appointment Block',
    plural: 'Appointment Blocks',
  },
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
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
