import { Block } from 'payload/types'

export const AllBlogs_Block: Block = {
  slug: 'AllBlogs',
  // imageURL: '',
  interfaceName: 'AllBlogsType',
  labels: {
    singular: 'AllBlogs Block',
    plural: 'AllBlogs Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
  ],
}
