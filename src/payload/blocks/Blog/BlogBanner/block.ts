import { Block } from 'payload'

export const BlogBanner_Block: Block = {
  slug: 'BlogBanner',
  // imageURL: '',
  interfaceName: 'BlogBannerType',
  labels: {
    singular: 'BlogBanner Block',
    plural: 'BlogBanner Blocks',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
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
