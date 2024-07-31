import type { CollectionConfig } from 'payload'

import { TouristDetailsEmailToAdmin } from './hooks/TouristDetailsEmailToAdmin'

export const Tourists: CollectionConfig = {
  slug: 'tourists',
  labels: {
    singular: 'Tourist',
    plural: 'Tourists',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [TouristDetailsEmailToAdmin],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
    },
  ],
}
