import { Block } from 'payload/types'

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
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
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
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
        },
        {
          name: 'feature_icon',
          label: 'Feature Icon',
          type: 'select',
          options: [
            { label: 'Experienced', value: '1' },
            { label: 'Comprehensive Services', value: '2' },
            { label: 'Patient-centered', value: '3' },
            { label: 'State-of-the-art', value: '4' },
          ],
        },
      ],
    },
  ],
}
