import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { getCurrentUser } from '@/lib/authjs-payload-adapter/payload'
import Footer from '@/payload/blocks/Footer'
import Header from '@/payload/blocks/Header'

export const revalidate = 60000

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayloadHMR({ config: configPromise })
  const initData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })
  const user = await getCurrentUser()
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navbar */}
      <Header headerData={initData?.header!} variant='cs_heading_color' />
      <div className='flex-grow'>{children}</div>
      <Footer />
      {/* Footer */}
    </div>
  )
}
