import type { CollectionConfig } from 'payload'

import { isAdminOrSelf } from './access/isAdminOrSelf'

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  labels: {
    singular: 'Appointment',
    plural: 'Appointments',
  },
  access: {
    create: () => true,
    read: () => true,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  admin: {
    useAsTitle: 'name',
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 10,
  },
  // hooks: {
  //   afterChange: [informDoctor],
  // },
  fields: [
    // {
    //   name: 'title',
    //   type: 'text',
    //   label: 'Title',
    // },
    // {
    //   type: 'row',
    //   fields: [
    //     { name: 'attendee_name', type: 'text', label: 'Attend Name' },
    //     { name: 'attendee_email', type: 'email', label: 'Attend Email' },
    //   ],
    // },
    // {
    //   type: 'row',
    //   fields: [
    //     {
    //       name: 'description',
    //       type: 'textarea',
    //       label: 'Description',
    //     },
    //     {
    //       name: 'additional_notes',
    //       type: 'textarea',
    //       label: 'Additional Notes',
    //     },
    //   ],
    // },
    // {
    //   type: 'row',
    //   fields: [
    //     {
    //       name: 'start_time',
    //       label: 'Meeting Start Time',
    //       type: 'date',
    //       admin: {
    //         date: {
    //           pickerAppearance: 'dayAndTime',
    //         },
    //       },
    //     },
    //     {
    //       name: 'end_time',
    //       label: 'Meeting End Time',
    //       type: 'date',
    //       admin: {
    //         date: {
    //           pickerAppearance: 'dayAndTime',
    //         },
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'metadata',
    //   type: 'json',
    //   label: 'Metadata',
    // },
    // {
    //   name: 'doctor',
    //   type: 'relationship',
    //   relationTo: ['doctors'],
    //   label: 'Doctor',
    //   admin: {
    //     position: 'sidebar',
    //   },
    // },
    // {
    //   name: 'booking_status',
    //   type: 'text',
    //   label: 'Booking Status',
    //   admin: {
    //     position: 'sidebar',
    //   },
    // },
    // {
    //   name: 'cal_video_url',
    //   type: 'text',
    //   label: 'Cal Video Url',
    //   admin: {
    //     position: 'sidebar',
    //   },
    // },
    // {
    //   name: 'uid',
    //   type: 'text',
    //   label: 'UID',
    //   admin: {
    //     readOnly: true,
    //     position: 'sidebar',
    //   },
    // },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      required: true,
    },
    {
      name: 'medicalRecordNumber',
      label: 'Medical Record Number',
      type: 'text',
    },
    {
      name: 'reasonForVisit',
      label: 'Reason for Visit',
      type: 'textarea',
      required: true,
    },
  ],
}
