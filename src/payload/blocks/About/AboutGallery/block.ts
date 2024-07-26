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
      admin: {
        description: 'Enter title for your gallery section',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter sub title for your gallery section',
      },
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
      admin: {
        description: 'Upload images for gallery section',
      },
    },
  ],
}
