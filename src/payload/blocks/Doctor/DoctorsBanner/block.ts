import { Block } from 'payload'

export const Doctor_Banner_Block: Block = {
  slug: 'DoctorBanner',
  interfaceName: 'DoctorBannerType',
  labels: {
    singular: 'Doctor Banner Block',
    plural: 'Doctor Banner Blocks',
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
      name: 'bgUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
  ],
}
