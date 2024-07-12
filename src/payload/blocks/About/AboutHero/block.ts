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
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
