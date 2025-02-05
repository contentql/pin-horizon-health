import { Block } from 'payload'

const List_Block: Block = {
  slug: 'List',
  interfaceName: 'ListType',
  labels: {
    singular: 'List Block',
    plural: 'List Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      admin: {
        description: 'Optional, this title will not display in frontend',
      },
    },
    {
      type: 'select',
      name: 'collectionSlug',
      label: 'Collection Slug',
      options: [
        {
          label: 'Doctors',
          value: 'doctors',
        },
        {
          label: 'Hospitals',
          value: 'hospitals',
        },
        {
          label: 'Yoga',
          value: 'yoga',
        },
        {
          label: 'Ayurveda',
          value: 'ayurveda',
        },
        {
          label: 'Blogs',
          value: 'blogs',
        },
      ],
    },
  ],
}

export default List_Block
