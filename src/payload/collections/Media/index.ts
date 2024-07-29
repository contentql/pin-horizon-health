import type { CollectionConfig, Field } from 'payload'

const urlField: Field = {
  name: 'url',
  type: 'text',
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'tour_gallery_1',
        width: undefined,
        height: 320,
        position: 'centre',
      },
      {
        name: 'tour_card',
        width: 320,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'tour_gallery',
        width: undefined,
        height: 797,
        position: 'centre',
      },
      {
        name: 'blog_image_size2',
        width: 986,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'blog_image_size3',
        width: 1470,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'appointment_contact_image',
        width: 547,
        height: undefined,
        position: 'centre',
      },
      {
        height: undefined,
        width: 525,
        crop: 'center',
        name: 'doctorImage',
      },
      {
        height: undefined,
        width: 1296,
        crop: 'center',
        name: 'blogImage',
      },
    ],
    focalPoint: false,
    crop: false,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
    },

    // The following fields should be able to be merged in to default upload fields
    urlField,
    {
      name: 'sizes',
      type: 'group',
      fields: [
        {
          name: 'square',
          type: 'group',
          fields: [urlField],
        },
      ],
    },
  ],
}
