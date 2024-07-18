import { Block } from 'payload/types'

export const Travel_Hero_Block: Block = {
  slug: 'TravelHero',
  interfaceName: 'TravelHeroType',
  labels: {
    singular: 'Travel Hero Block',
    plural: 'Travel Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'sub_title',
      type: 'textarea',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'imgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
    },
    {
      name: 'bgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
  ],
}
