import { Block } from 'payload'

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
      admin: {
        description: 'Enter title for Blogs section',
      },
    },
  ],
}
