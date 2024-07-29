import { Block } from 'payload'

export const LatestBlogs_Block: Block = {
  slug: 'LatestBlogs',
  // imageURL: '',
  interfaceName: 'LatestBlogsType',
  labels: {
    singular: 'LatestBlogs Block',
    plural: 'LatestBlogs Blocks',
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
  ],
}
