import { Block } from 'payload/types'

export const Department_Hero_Block: Block = {
  slug: 'DepartmentHero',
  interfaceName: 'DepartmentHeroType',
  labels: {
    singular: 'Department Hero Block',
    plural: 'Department Hero Blocks',
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
