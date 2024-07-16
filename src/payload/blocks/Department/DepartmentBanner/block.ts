import { Block } from 'payload/types'

export const Department_Banner_Block: Block = {
  slug: 'DepartmentBanner',
  interfaceName: 'DepartmentBannerType',
  labels: {
    singular: 'Department Banner Block',
    plural: 'Department Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'sub_title',
      type: 'textarea',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'imgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
  ],
}
