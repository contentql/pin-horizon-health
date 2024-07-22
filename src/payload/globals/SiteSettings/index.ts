import { revalidateTag } from 'next/cache'
import type { Field, GlobalConfig } from 'payload/types'

import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'
import iconField from '@/payload/fields/icon'

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
        },
        iconField(),
        { type: 'text', name: 'description' },
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
            { type: 'text', name: 'appName' },
            { type: 'text', name: 'appDescription' },
          ],
        },
        {
          name: 'header',
          fields: [
            { type: 'upload', name: 'logo_image', relationTo: 'media' },
            menuItemsField('menuItems'),
          ],
        },
        {
          name: 'footer',
          fields: [
            { type: 'upload', name: 'logo_image', relationTo: 'media' },
            { type: 'text', name: 'logo' },
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
                },
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                },
              ],
            },
            { name: 'title', type: 'text' },
            { name: 'sub_title', type: 'text' },
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
                },
                {
                  name: 'social_media_url',
                  label: 'Social Media URL',
                  type: 'text',
                  required: true,
                },
              ],
            },
            { type: 'text', name: 'copyright' },
          ],
        },
      ],
    },
  ],
}
