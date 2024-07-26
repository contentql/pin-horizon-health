import { Block } from 'payload/types'

export const AboutHero_Block: Block = {
  slug: 'AboutHero',
  // imageURL: '',
  interfaceName: 'AboutHeroType',
  labels: {
    singular: 'AboutHero Block',
    plural: 'AboutHero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter Hero section Title',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter Hero Section Sub Title',
      },
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an Image for Hero Section',
      },
    },
  ],
}
