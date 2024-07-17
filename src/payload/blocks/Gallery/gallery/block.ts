import { Block } from 'payload/types'

export const Gallery_Block: Block = {
  slug: 'Gallery',
  // imageURL: '',
  interfaceName: 'GalleryType',
  labels: {
    singular: 'Gallery Block',
    plural: 'Gallery Blocks',
  },
  fields: [
    {
      name: 'gallery',
      label: 'Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
