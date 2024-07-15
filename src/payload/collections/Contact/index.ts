import type { CollectionConfig } from 'payload/types'

export const Contact: CollectionConfig = {
  slug: 'contact',
  labels: {
    singular: 'contact',
    plural: 'Contacts',
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
  // hooks: {
  //   afterChange: [ContactEmailToUser],
  // },
  fields: [
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
      required: true,
    },

    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
    },
  ],
}
