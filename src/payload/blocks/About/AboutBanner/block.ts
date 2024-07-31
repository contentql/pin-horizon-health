import { Block } from 'payload'

export const AboutBanner_Block: Block = {
  slug: 'AboutBanner',
  // imageURL: '',
  interfaceName: 'AboutBannerType',
  labels: {
    singular: 'AboutBanner Block',
    plural: 'AboutBanner Blocks',
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
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
