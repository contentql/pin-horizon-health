import { Block } from 'payload'

export const AboutAwards_Block: Block = {
  slug: 'AboutAwards',
  // imageURL: '',
  interfaceName: 'AboutAwardsType',
  labels: {
    singular: 'AboutAwards Block',
    plural: 'AboutAwards Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the title of the Awards section',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter the sub title of the Awards section',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      admin: {
        description: 'Enter description of the Awards section',
      },
    },
    {
      name: 'awards',
      label: 'Awards',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          required: true,
          type: 'text',
          admin: {
            description: 'Enter the title of the award',
          },
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          required: true,
          relationTo: 'media',
          admin: {
            description: 'Upload an image representing the award',
          },
        },
      ],
    },
  ],
}
