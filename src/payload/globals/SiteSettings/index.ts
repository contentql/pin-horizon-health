import { revalidateTag } from 'next/cache'
import type { Field, GlobalConfig } from 'payload/types'

import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'

export const GLOBAL_SETTINGS_SLUG = 'site-settings'

const menuItemsField = (
  name: 'subMenuItems' | 'menuItems',
  depth: number = 2,
): Field => {
  const label = name === 'menuItems' ? 'Menu Items' : 'Sub Menu Items'
  const fields: Field[] = [
    {
      type: 'row',
      fields: [
        {
          type: 'relationship',
          name: 'page',
          relationTo: [COLLECTION_SLUG_PAGE],
          admin: {
            description: 'Select page to diaplay as link',
          },
        },
      ],
    },
  ]

  if (depth > 0) {
    fields.push(menuItemsField('subMenuItems', depth - 1))
  }

  return {
    type: 'array',
    name,
    label,
    fields,
  }
}

export const siteSettings: GlobalConfig = {
  slug: GLOBAL_SETTINGS_SLUG,
  // access: {
  //   read: isAdminOrCurrentUser,
  //   update: isAdmin,
  // },
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
          ],
        },
        {
          name: 'header',
          fields: [
            {
              type: 'upload',
              name: 'logo_image',
              relationTo: 'media',
              admin: {
                description: 'Upload an image of your application logo',
              },
            },
            {
              type: 'text',
              name: 'app_name',
              admin: { description: 'Enter your app name' },
            },
            menuItemsField('menuItems'),
            {
              name: 'app_description',
              label: 'Description',
              type: 'text',
              admin: { description: 'Enter your app description' },
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
              type: 'upload',
              name: 'logo_image',
              relationTo: 'media',
              admin: {
                description: 'Upload an image of your application logo',
              },
            },
            {
              type: 'text',
              name: 'logo',
              admin: { description: 'Enter your app name' },
            },
            menuItemsField('menuItems'),
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
              name: 'social_media',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Icon',
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
                  name: 'social_media_url',
                  label: 'Social Media URL',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Enter social media url for selected icon',
                  },
                },
              ],
              admin: { description: 'Add your social media' },
            },
            {
              type: 'text',
              name: 'copyright',
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
          ],
        },
      ],
    },
  ],
}
