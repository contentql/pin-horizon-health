import { Block } from 'payload'

const Details_Block: Block = {
  slug: 'Details',
  // imageURL: '',
  interfaceName: 'DetailsType',
  labels: {
    singular: 'Dynamic Content Block',
    plural: 'Dynamic Content Blocks',
  },
  fields: [
    {
      type: 'select',
      name: 'collectionSlug',
      label: 'Collection Slug',
      options: [
        {
          label: 'Blogs/Yoga/ayurveda',
          value: 'blogs',
        },
        {
          label: 'Hospital',
          value: 'hospital',
        },
        {
          label: 'Doctor',
          value: 'doctors',
        },
      ],
    },
  ],
}

export default Details_Block
