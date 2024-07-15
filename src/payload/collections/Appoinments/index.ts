import type { CollectionConfig } from 'payload/types'

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  labels: {
    singular: 'Appointment',
    plural: 'Appointments',
  },
  access: {
    read: () => true,
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
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'textarea',
      required: true,
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
      type: 'text',
    },

    {
      name: 'reason',
      label: 'Reason for visit',
      type: 'radio',
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
      type: 'radio',
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
}
