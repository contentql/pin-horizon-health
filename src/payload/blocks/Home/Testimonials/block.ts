import { Block } from 'payload/types'

export const Testimonials_Block: Block = {
  slug: 'Testimonials',
  // imageURL: '',
  interfaceName: 'TestimonialsType',
  labels: {
    singular: 'Testimonials Block',
    plural: 'Testimonials Blocks',
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
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'review',
          label: 'Review',
          type: 'text',
        },
        {
          name: 'rating',
          label: 'Rating',
          type: 'number',
        },
      ],
    },
  ],
}
