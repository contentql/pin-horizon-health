import '../../theme/sass/index.scss'
import { env } from '@env'
import configPromise from '@payload-config'
import { Media } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/(app)/globals.css'
import Provider from '@/trpc/Provider'
import { MetadataProvider } from '@/utils/metadataContext'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadHMR({ config: configPromise })
  const initData = await payload.findGlobal({
    slug: 'site-settings',
  })

  return {
    title: initData?.appName as string,
    description: initData?.appDescription as string,
    metadataBase: new URL(env.PAYLOAD_URL),
    openGraph: {
      siteName: initData?.appName as string,
      type: 'website',
      locale: 'en_US',
      url: new URL(env.PAYLOAD_URL),
      description: initData?.appDescription as string,
      images: [
        {
          url: initData?.ogImage
            ? (initData?.ogImage as Media)?.url!
            : '/images/horizon-screensort.png',
          height: 630,
          width: 1200,
          alt: 'OG Image',
        },
      ],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const payload = await getPayloadHMR({ config: configPromise })
  const metadata = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })
  return (
    <html lang='en' className='dark'>
      <body className={`${inter.className}`}>
        <MetadataProvider metadata={metadata}>
          <Provider>{children}</Provider>
        </MetadataProvider>
      </body>
    </html>
  )
}
