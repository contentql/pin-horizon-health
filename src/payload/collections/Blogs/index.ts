import { slateEditor } from '@payloadcms/richtext-slate'
import type { CollectionConfig } from 'payload'

import { slugField } from '@/payload/fields'

import { self } from './access/self'
import { assignUserId } from './field-level-hooks/assignUserId'

// import { CustomSlugComponent } from '@/payload/fields/custom-slug-component'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  access: {
    read: self,
    create: self,
    update: self,
    delete: self,
  },
  admin: {
    useAsTitle: 'title',
    // preview: doc => {
    //   return `${env.PAYLOAD_URL}/next/preview?url=${encodeURIComponent(
    //     `${env.PAYLOAD_URL}/blog/${doc.slug}`,
    //   )}&secret=${env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    // },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'author',
      type: 'relationship',
      label: 'Author',
      required: true,
      relationTo: ['doctors'],
      hasMany: true,
      // defaultValue: ({ user }: { user: User }) => {
      //   if (!user) return undefined

      //   return { relationTo: 'users', value: user?.id }
      // },
      hooks: {
        beforeChange: [assignUserId],
      },
      filterOptions: ({ relationTo, data }) => {
        if (relationTo === 'doctors') {
          return {
            role: {
              equals: 'doctor',
            },
          }
        } else {
          return false
        }
      },
      admin: {
        description: 'Select Author for Blog',
      },
    },
    {
      name: 'tags',
      label: 'Tags',
      required: true,
      type: 'relationship',
      relationTo: ['tags'],
      admin: {
        description: 'Must Select tag for Blog,yoga or Ayurveda',
      },
      hasMany: false,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter title for Blog',
      },
    },
    slugField(),
    // It will directly use title field to add slug
    // {
    //   name: 'slug',
    //   label: 'Slug',
    //   type: 'text',
    //   index: true,
    //   required: false, // Need to be false so that we can use beforeValidate hook to set slug.
    //   admin: {
    //     position: 'sidebar',
    //     description: 'keep slug empty if you want this page as homepage',
    //     condition: data => {
    //       return !data?.isHome
    //     },
    //     components: {
    //       Field: CustomSlugComponent,
    //     },
    //   },
    // },

    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      admin: {
        description: 'Enter sub title for Blog',
      },
      // required: true,
    },
    {
      name: 'blog_image',
      label: 'Blog Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload blog image',
      },
    },
    {
      name: 'social_media',
      label: 'Social Media',
      type: 'array',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          required: true,
          type: 'select',
          options: [
            { label: 'Linkedin', value: 'fa-brands:linkedin-in' },
            { label: 'Facebook', value: 'fa-brands:facebook-f' },
            { label: 'Twitter', value: 'fa-brands:twitter' },
          ],
          admin: {
            description: 'Select social media icon for blog',
          },
        },
        {
          name: 'url',
          label: 'Url',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter url of that social media',
          },
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Content',
      required: true,

      editor: slateEditor({}),
      admin: {
        description:
          'Main content of the blog post. Use the rich text editor for formatting.',
      },
    },

    // slugField(),
  ],
}
