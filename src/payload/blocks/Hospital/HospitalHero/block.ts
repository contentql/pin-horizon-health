import { Block } from 'payload/types'

export const Hospital_Hero_Block: Block = {
  slug: 'HospitalHero',
  interfaceName: 'HospitalHeroType',
  labels: {
    singular: 'Hospital Hero Block',
    plural: 'Hospital Hero Blocks',
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
