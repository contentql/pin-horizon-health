import { Block } from 'payload/types'

export const Hero_Block: Block = {
  slug: 'Hero',
  // imageURL: '',
  interfaceName: 'HeroType',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
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
      name: 'hero_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
    },
    {
      name: 'background_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    // {
    //   name: 'video_button_text',
    //   type: 'text',
    //   label: 'Video Button Text',
    // },
    // {
    //   name: 'video_url',
    //   type: 'text',
    //   label: 'Video Url',
    // },
    // {
    //   name: 'contact_info',
    //   type: 'array',
    //   label: 'Contact Info',
    //   fields: [
    //     {
    //       name: 'title',
    //       label: 'Title',
    //       type: 'text',
    //     },
    //     {
    //       name: 'sub_title',
    //       label: 'Sub Title',
    //       type: 'text',
    //     },
    //     {
    //       name: 'contact_icon',
    //       label: 'Contact Icon',
    //       type: 'select',
    //       options: [
    //         { label: 'Phone', value: '1' },
    //         { label: 'Stethoscope', value: '2' },
    //         { label: 'Location', value: '3' },
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'button_text',
      type: 'text',
      label: 'Button Text',
    },
    {
      name: 'button_url',
      type: 'text',
      label: 'Button Url',
    },
  ],
}
