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
      admin: {
        description: 'Enter the title for Hero section',
      },
    },
    {
      name: 'sub_title',
      type: 'textarea',
      label: 'Sub Title',
      required: true,
      admin: {
        description: 'Enter the sub title for Hero section',
      },
    },
    {
      name: 'imgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
      admin: {
        description: 'Upload an image for Hero section',
      },
    },
    {
      name: 'bgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Upload an background image for Hero section',
      },
    },
  ],
}
