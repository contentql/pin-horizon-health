import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { headers } from 'next/headers'

import PopupCalComponent from '@/components/common/PopupCalComponent'
import Footer from '@/payload/blocks/Footer'
import Header from '@/payload/blocks/Header'

export const revalidate = 60000

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayloadHMR({ config: configPromise })
  const initSiteSettingsData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })
  const headersList = headers()
  // const user = await getCurrentUser(headersList)
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navbar */}
      <Header
        initSiteSettingsData={initSiteSettingsData}
        variant='cs_heading_color'
      />
      <div className='flex-grow'>{children}</div>
      <div>
        <PopupCalComponent initData={initSiteSettingsData} />
      </div>
      <Footer initSiteSettingsData={initSiteSettingsData} />
      {/* Footer */}
    </div>
  )
}
