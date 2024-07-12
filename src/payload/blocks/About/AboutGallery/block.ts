import { Block } from 'payload/types'

export const AboutGallery_Block: Block = {
  slug: 'AboutGallery',
  // imageURL: '',
  interfaceName: 'AboutGalleryType',
  labels: {
    singular: 'AboutGallery Block',
    plural: 'AboutGallery Blocks',
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
