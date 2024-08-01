import type { CollectionConfig } from 'payload'

import { visibleToAdminOnly } from '@/payload/hidden'

import { TouristDetailsEmailToAdmin } from './hooks/TouristDetailsEmailToAdmin'
import { SuccessEmailToTourist } from './hooks/successEmailToTourist'

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
    hidden: visibleToAdminOnly,
  },
  hooks: {
    afterChange: [TouristDetailsEmailToAdmin, SuccessEmailToTourist],
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
      name: 'no_of_persons',
      label: 'No. of persons',
      type: 'number',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
    },
  ],
}
