import { Block } from 'payload'

export const Video_Block: Block = {
  slug: 'Video',
  interfaceName: 'VideoType',
  labels: {
    singular: 'Video Block',
    plural: 'Test Blocks',
  },
  fields: [
    {
      type: 'text',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'textarea',
      label: 'Description',
      name: 'description',
    },
    {
      type: 'text',
      name: 'youtubeUrl',
      label: 'YouTube URL',
      required: true,
    },
  ],
}
