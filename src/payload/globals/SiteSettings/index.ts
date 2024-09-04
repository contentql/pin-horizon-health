import { revalidateTag } from 'next/cache'
import { Field, GlobalConfig } from 'payload'
import { z } from 'zod'

import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'

// import iconField from '@/payload/fields/icon'

export const GLOBAL_SETTINGS_SLUG = 'site-settings'

const validateURL = z
  .string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  })
  .url()

const menuItem: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'externalLink',
        type: 'checkbox',
        label: 'External Link',
        defaultValue: false,
        admin: {
          description: 'Other website link',
        },
      },
      {
        name: 'newPage',
        type: 'checkbox',
        label: 'New Page',
        defaultValue: false,
        admin: {
          condition: (_data, siblingData) => siblingData.externalLink,
          description: 'Open website in new-page',
        },
      },
    ],
  },
  {
    type: 'relationship',
    name: 'page',
    relationTo: [COLLECTION_SLUG_PAGE],
    admin: {
      condition: (_data, siblingData) => !siblingData.externalLink,
    },
  },
  {
    type: 'row',
    fields: [
      {
        name: 'label',
        type: 'text',
        label: 'Label',
        admin: {
          condition: (_data, siblingData) => siblingData.externalLink,
        },
      },
      {
        name: 'link',
        type: 'text',
        label: 'Link',
        admin: {
          condition: (_data, siblingData) => siblingData.externalLink,
        },
        validate: value => {
          const { success } = validateURL.safeParse(value)
          return success || 'Link is not valid'
        },
      },
    ],
  },
]

const menuGroupItem: Field = {
  type: 'group',
  name: 'menuLinkGroup',
  label: 'Link Group',
  fields: [
    {
      type: 'text',
      name: 'groupTitle',
      label: 'Group Title',
      required: true,
    },
    {
      type: 'array',
      name: 'groupLinks',
      label: 'Links',
      fields: menuItem,
    },
  ],
  admin: {
    condition: (_data, siblingData) => siblingData.group,
  },
}

const menuField: Field[] = [
  {
    type: 'checkbox',
    name: 'group',
    label: 'Group',
    defaultValue: false,
    admin: {
      description: 'Check to create group of links',
    },
  },
  {
    name: 'menuLink',
    type: 'group',
    label: 'Link',
    fields: menuItem,
    admin: {
      condition: (_data, siblingData) => !siblingData.group,
    },
  },
  menuGroupItem,
]

const logoField: Field[] = [
  {
    name: 'imageUrl',
    type: 'upload',
    required: true,
    relationTo: 'media',
    label: 'Image',
  },
  {
    type: 'row',
    fields: [
      {
        label: 'Height',
        name: 'height',
        type: 'number',
        admin: {
          description: 'Adjust to the height of the logo',
        },
      },
      {
        label: 'Width',
        name: 'width',
        type: 'number',
        admin: {
          description: 'Adjust to the width of the logo',
        },
      },
    ],
  },
]

const socialLinksField: Field = {
  type: 'row',
  fields: [
    {
      type: 'select',
      name: 'socialMedia',
      label: 'Social Media',
      required: true,
      options: [
        { label: 'Facebook', value: 'fa-brands:facebook-f' },
        { label: 'YouTube', value: 'fa-brands:youtube' },
        { label: 'Twitter', value: 'fa-brands:twitter' },
        { label: 'Linkedin', value: 'fa-brands:linkedin-in' },
        { label: 'instagram', value: 'fa-brands:instagram' },
      ],
      admin: { description: 'Select social media icon' },
    },
    {
      type: 'text',
      name: 'socialMediaLink',
      label: 'Social Media Link',
      required: true,
      validate: (socialMediaLink, args) => {
        const { success } = validateURL.safeParse(socialMediaLink)
        // console.log({ success, operation }, success || 'Link is not valid')

        // return text(value, args)

        return success || 'Link is not valid'
      },
    },
  ],
}

export const siteSettings: GlobalConfig = {
  slug: GLOBAL_SETTINGS_SLUG,
  access: {
    read: () => true,
    // update: isAdmin,
  },
  hooks: {
    afterChange: [async () => revalidateTag('site-settings')],
  },
  fields: [
    {
      type: 'tabs',
      label: 'Settings',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              type: 'text',
              name: 'appName',
              admin: { description: 'Enter your app name' },
            },
            {
              type: 'text',
              name: 'appDescription',
              admin: { description: 'Enter your app description' },
            },
            {
              name: 'logoImage',
              type: 'upload',
              required: true,
              relationTo: 'media',
              label: 'Logo Image',
              admin: {
                description: 'We recommend a maximum size of 256 * 256 pixels',
              },
            },
          ],
        },
        {
          name: 'header',
          fields: [
            {
              name: 'menuLinks',
              label: 'Menu Links',
              type: 'array',
              fields: menuField,
            },
            {
              type: 'array',
              name: 'personal_details',
              label: 'Personal Details',
              fields: [
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Phone', value: '1' },
                    { label: 'Mail', value: '2' },
                    { label: 'Location', value: '3' },
                  ],
                  admin: { description: 'Select required icon for details' },
                },
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                  admin: {
                    description:
                      'Enter your title here (Ex: Location, Phone, Mail)',
                  },
                },
                {
                  name: 'sub_title',
                  required: true,
                  label: 'Sub Title',
                  type: 'text',
                  admin: { description: 'Enter your value for above title' },
                },
              ],
              admin: {
                description: 'Add your application details',
              },
            },
          ],
        },
        {
          name: 'footer',
          fields: [
            {
              name: 'links',
              type: 'array',
              label: 'Links',
              fields: menuField,
            },
            {
              name: 'personal_information',
              type: 'array',
              label: 'Personal Information',
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Icon',
                  required: true,
                  options: [
                    { label: 'Location', value: 'ep:location' },
                    { label: 'Phone', value: 'fluent:call-24-regular' },
                    { label: 'Mail', value: 'bi:envelope' },
                  ],
                  admin: {
                    description: 'Select required icon for app details',
                  },
                },
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Enter your value for above selected icon',
                  },
                },
              ],
              admin: { description: 'Add your application details' },
            },
            {
              name: 'title',
              type: 'text',
              admin: {
                description: 'Enter some text as title for user attention',
              },
            },
            {
              name: 'sub_title',
              type: 'text',
              admin: {
                description: 'Enter some text as subtitle for user attention',
              },
            },
            {
              type: 'array',
              name: 'socialLinks',
              label: 'Social Links',
              fields: [socialLinksField],
            },
            {
              type: 'text',
              name: 'copyright',
              label: 'Copyright',
              admin: { description: 'Enter copyrights of your application' },
            },
          ],
        },
        {
          label: 'Admin Settings',
          fields: [
            {
              type: 'email',
              name: 'email',
              label: 'Admin Email',
              admin: {
                description:
                  'Enter admin email to receive mails from users who booked doctors appointment and who need to know more information',
              },
            },
            {
              type: 'number',
              name: 'phone_number',
              label: 'Admin Phone Number',
              admin: { description: 'Enter admin phone number' },
            },
            {
              type: 'text',
              name: 'cal_team',
              label: 'Cal Team Url',
              admin: { description: 'Enter cal team url' },
            },
          ],
        },
      ],
    },
  ],
}
