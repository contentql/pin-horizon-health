import { Block } from 'payload/types'

export const Banner_Block: Block = {
  slug: 'Banner',
  // imageURL: '',
  interfaceName: 'BannerType',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Blocks',
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
