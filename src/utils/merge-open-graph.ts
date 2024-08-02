import { env } from '@env'
import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Horizon',
  title: 'Horizon',
  description: 'An medical tourism website.',
  images: [
    {
      url: `${env.PAYLOAD_URL}/public/favicon.ico`,
    },
  ],
}

export const mergeOpenGraph = (
  og?: Metadata['openGraph'],
): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
