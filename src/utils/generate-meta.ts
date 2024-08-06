import { env } from '@env'
import type { Blog, Doctor, Hospital } from '@payload-types'
import type { Metadata } from 'next'

import { generateMetadata } from '@/app/(app)/layout'

import { mergeOpenGraph } from './merge-open-graph'

export const generateMeta = async (args: {
  doc: Blog | Doctor | Hospital | null
  collectionSlug: string
}): Promise<Metadata> => {
  // ? collectionSlug is the name of the page eg.: http://localhost:3000/blog/[id] (`blog` is the collectionSlug)
  const { doc, collectionSlug } = args || {}

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc?.meta?.image !== null &&
    'url' in doc?.meta?.image &&
    doc.meta.image.url

  const url = `${env.PAYLOAD_URL}/${collectionSlug}/${doc?.slug}`

  const defaultMetaData = await generateMetadata()

  return {
    title: doc?.meta?.title || defaultMetaData?.title,
    description: doc?.meta?.description || defaultMetaData?.description,
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title!,
      description: doc?.meta?.description!,
      url,
      images: ogImage
        ? [
            {
              url: env.PAYLOAD_URL + ogImage,
            },
          ]
        : undefined,
    }),
  }
}
