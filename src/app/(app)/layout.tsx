import '../../theme/sass/index.scss'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/(app)/globals.css'
import Provider from '@/trpc/Provider'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadHMR({ config: configPromise })
  const initData = await payload.findGlobal({
    slug: 'site-settings',
  })

  return {
    title: initData?.appName as string,
    description: initData?.appDescription as string,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
