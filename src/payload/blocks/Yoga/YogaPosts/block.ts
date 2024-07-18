import { Block } from 'payload/types'

export const YogaPosts_Block: Block = {
  slug: 'YogaPosts',
  interfaceName: 'YogaPostsType',
  labels: {
    singular: 'YogaPosts Block',
    plural: 'YogaPosts Blocks',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
  ],
}
