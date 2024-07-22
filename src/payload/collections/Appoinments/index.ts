import type { CollectionConfig } from 'payload/types'

import { isAdminOrSelf } from './access/isAdminOrSelf'

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  labels: {
    singular: 'Appointment',
    plural: 'Appointments',
  },
  access: {
    create: isAdminOrSelf,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 10,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      type: 'row',
      fields: [
        { name: 'attendee_name', type: 'text', label: 'Attend Name' },
        { name: 'attendee_email', type: 'email', label: 'Attend Email' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'additional_notes',
          type: 'textarea',
          label: 'Additional Notes',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'start_time',
          label: 'Meeting Start Time',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'end_time',
          label: 'Meeting End Time',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    {
      name: 'metadata',
      type: 'json',
      label: 'Metadata',
    },
    {
      name: 'doctor',
      type: 'relationship',
      relationTo: ['doctors'],
      label: 'Doctor',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'booking_status',
      type: 'text',
      label: 'Booking Status',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'uid',
      type: 'text',
      label: 'UID',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}
