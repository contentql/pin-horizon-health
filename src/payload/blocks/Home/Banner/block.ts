import { Block } from 'payload/types'

export const Banner_Block: Block = {
  slug: 'Banner',
  // imageURL: '',
  interfaceName: 'BannerType',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Add Banner Section title',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Add Banner Section sub title',
      },
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload Banner Section image',
      },
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      admin: {
        description: 'Add button name',
      },
    },
    {
      name: 'button_path',
      label: 'Button Path',
      type: 'text',
      admin: {
        description: 'Button redirecting page name',
      },
    },
  ],
}
