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
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
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
