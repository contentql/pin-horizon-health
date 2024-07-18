import { Block } from 'payload/types'

export const AyurvedaPosts_Block: Block = {
  slug: 'AyurvedaPosts',

  interfaceName: 'AyurvedaPostsType',
  labels: {
    singular: 'AyurvedaPosts Block',
    plural: 'AyurvedaPosts Blocks',
  },
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
  ],
}
