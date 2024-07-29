import { Block } from 'payload'

export const AboutFeatures_Block: Block = {
  slug: 'AboutFeatures',
  // imageURL: '',
  interfaceName: 'AboutFeaturesType',
  labels: {
    singular: 'AboutFeatures Block',
    plural: 'AboutFeatures Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the title for features section',
      },
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an image for features section',
      },
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter feature title',
          },
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter feature sub title',
          },
        },
        {
          name: 'feature_icon',
          label: 'Feature Icon',
          required: true,
          type: 'select',
          options: [
            { label: 'Experienced', value: '1' },
            { label: 'Comprehensive Services', value: '2' },
            { label: 'Patient-centered', value: '3' },
            { label: 'State-of-the-art', value: '4' },
          ],
          admin: {
            description: 'Select feature Icon',
          },
        },
      ],
      admin: {
        description: 'Add your features',
      },
    },
  ],
}
