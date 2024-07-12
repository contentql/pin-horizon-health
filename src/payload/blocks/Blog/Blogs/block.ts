import { Block } from 'payload/types'

export const Blogs_Block: Block = {
  slug: 'Blogs',
  // imageURL: '',
  interfaceName: 'BlogsType',
  labels: {
    singular: 'Blogs Block',
    plural: 'Blogs Blocks',
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
