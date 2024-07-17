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
      type: 'row',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },

    {
      name: 'medicalRecordNumber',
      label: 'Medical Record Number',
      type: 'text',
      required: true,
    },
    {
      name: 'preferredDateAndTime',
      label: 'Preferred Date and Time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },

    {
      type: 'row',
      fields: [
        {
          name: 'reason',
          label: 'Reason for visit',
          type: 'select',
          options: [
            { label: 'Routine Checkup', value: 'routineCheckup' },
            { label: 'New Patient visit', value: 'newPatientVisit' },
            { label: 'Specific concern', value: 'specificConcern' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'department',
          label: 'Department',
          type: 'select',
          options: [
            { label: 'Pediatric', value: 'pediatric' },
            {
              label: 'Obstetrics and Gynecology',
              value: 'obstetricsGynecology',
            },
            { label: 'Cardiology', value: 'cardiology' },
            { label: 'Neurology', value: 'neurology' },
          ],
        },
      ],
    },
    {
      name: 'doctor',
      label: 'Doctor',
      type: 'relationship',
      relationTo: 'doctors',
    },
  ],
}
