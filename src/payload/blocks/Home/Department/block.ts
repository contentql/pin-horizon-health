import { Block } from 'payload/types'

export const Department_Block: Block = {
  slug: 'Department',
  // imageURL: '',
  interfaceName: 'DepartmentType',
  labels: {
    singular: 'Department Block',
    plural: 'Department Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'departments',
      label: 'Departments',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'department_icon',
          type: 'select',
          options: [
            { label: 'Emergency Department', value: '1' },
            { label: 'Pediatric Departement', value: '2' },
            { label: 'Gynecology Department', value: '3' },
            { label: 'Cardiology Department', value: '4' },
            { label: 'Neurology Department', value: '5' },
            { label: 'Psychiatry Department', value: '6' },
          ],
        },
        {
          name: 'url_path',
          label: 'URL path',
          type: 'text',
        },
      ],
    },
  ],
}
