import { Block } from 'payload'

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
      admin: {
        description: 'Add Testimonial Section title',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Add Testimonial Section sub title',
      },
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
          admin: {
            description: 'Add reviewer name',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          admin: {
            description: 'Add reviewer city',
          },
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload Reviewer image',
          },
        },
        {
          name: 'review',
          label: 'Review',
          type: 'text',
          admin: {
            description: 'Add your review',
          },
        },
        {
          name: 'rating',
          label: 'Rating',
          type: 'number',
          admin: {
            description: 'Add rating to the review',
          },
        },
      ],
      admin: {
        description: 'Add your Testimonials',
      },
    },
  ],
}
