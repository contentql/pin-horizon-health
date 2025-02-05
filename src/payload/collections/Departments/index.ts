import type { CollectionConfig } from 'payload'

import { slugField } from '@/payload/fields/slug'
import { visibleToAdminOnly } from '@/payload/hidden'

export const Departments: CollectionConfig = {
  slug: 'department',
  labels: {
    singular: 'Department',
    plural: 'Departments',
  },
  access: {
    read: () => true,
  },

  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    hidden: visibleToAdminOnly,
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Enter doctors department name',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Enter description about department',
      },
    },

    // {
    //   name: 'department_type',
    //   type: 'select',
    //   hasMany: true,
    //   label: 'Department Type',
    //   options: [
    //     { label: 'Doctor', value: 'Doctor' },
    //     { label: 'Hospital', value: 'Hospital' },
    //     { label: 'Yoga', value: 'Yoga' },
    //     { label: 'Travel', value: 'Travel' },
    //   ],
    // },
    slugField({ fieldToUse: 'title' }),
  ],
}
