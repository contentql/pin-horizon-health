import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { headers } from 'next/headers'

import PopupCalComponent from '@/components/common/PopupCalComponent'
import Footer from '@/payload/blocks/Footer'
import Header from '@/payload/blocks/Header'
import { getCurrentUser } from '@/utils/getCurrentUser'

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
  const headersList = headers()
  const user = await getCurrentUser(headersList)
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navbar */}
      <Header headerData={initData?.header!} variant='cs_heading_color' />
      <div className='flex-grow'>{children}</div>
      <div>
        <PopupCalComponent initData={initData} />
      </div>
      <Footer footerData={initData?.footer!} />
      {/* Footer */}
    </div>
  )
}
