import { Block } from 'payload/types'

export const Faqs_Block: Block = {
  slug: 'Faqs',
  // imageURL: '',
  interfaceName: 'FaqsType',
  labels: {
    singular: 'Faqs Block',
    plural: 'Faqs Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'Faqs',
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'text',
        },
      ],
    },
  ],
}
