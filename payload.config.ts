// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { env } from '@env'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { resendAdapter } from '@payloadcms/email-resend'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { seoPlugin } from '@payloadcms/plugin-seo'
import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Appointments } from '@/payload/collections/Appoinments'
import { Blogs } from '@/payload/collections/Blogs'
import { Contact } from '@/payload/collections/Contact'
import { Country } from '@/payload/collections/Country'
import { Departments } from '@/payload/collections/Departments'
import { Doctors } from '@/payload/collections/Doctors'
import { Hospitals } from '@/payload/collections/Hospital'
import { Media } from '@/payload/collections/Media'
import { Pages } from '@/payload/collections/Pages'
import { Tags } from '@/payload/collections/Tags'
import { Tourists } from '@/payload/collections/Tourists'
import { Tours } from '@/payload/collections/Tours'
import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'
import { siteSettings } from '@/payload/globals/SiteSettings'
import Icon from '@/payload/style/icons/Icon'
import Logo from '@/payload/style/icons/Logo'
import generateBreadcrumbsUrl from '@/utils/generateBreadcrumbsUrl'
import {
  generateDescription, // generateImage,
  generateTitle,
  generateURL,
} from '@/utils/seo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Doctors.slug,
    meta: {
      titleSuffix: '- ContentQL',
      // favicon: '/images/favicon.ico',
      // defaultOGImage: '/images/favicon.ico',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    livePreview: {
      url: ({ data, collectionConfig, locale }) => {
        const baseUrl = env.PAYLOAD_URL

        if (collectionConfig?.slug === 'blogs') {
          return `${baseUrl}/blog/${data.slug}`
        } else if (collectionConfig?.slug === 'hospital') {
          return `${baseUrl}/hospital/${data.slug}`
        } else if (collectionConfig?.slug === 'doctors') {
          return `${baseUrl}/doctor/${data.slug}`
        } else {
          return `${baseUrl}/${data.slug}${locale ? `?locale=${locale.code}` : ''}`
        }
      },

      // collections: ['pages', 'blogs', 'hospital', 'doctors'],

      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  cors: [env.PAYLOAD_URL],
  csrf: [env.PAYLOAD_URL],

  collections: [
    Media,
    Doctors,
    Departments,
    Tags,
    Blogs,
    Pages,
    Appointments,
    Contact,
    Hospitals,
    Country,
    Tourists,
    Tours,
  ],

  globals: [siteSettings],
  plugins: [
    nestedDocsPlugin({
      collections: [COLLECTION_SLUG_PAGE],
      generateURL: generateBreadcrumbsUrl,
    }),
    s3Storage({
      collections: {
        ['media']: true,
      },
      bucket: env.S3_BUCKET,
      config: {
        endpoint: env.S3_ENDPOINT,
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY,
        },
        region: env.S3_REGION,
      },
    }),
    seoPlugin({
      collections: ['blogs', 'doctors', 'hospital'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle,
      generateDescription,
      // generateImage,
      generateURL,
    }),
  ],

  email: resendAdapter({
    defaultFromAddress: env.RESEND_SENDER_EMAIL,
    defaultFromName: env.RESEND_SENDER_NAME,
    apiKey: env.RESEND_API_KEY,
  }),

  sharp,
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
    ],
  }),

  secret: env.PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
