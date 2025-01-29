import { Block } from 'payload'

export const Pdf_Block: Block = {
  slug: 'Pdf',
  interfaceName: 'PdfType',
  labels: {
    singular: 'Pdf Block',
    plural: 'Pdf Blocks',
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
      name: 'pdf',
      label: 'Pdf',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
