'use client'

import { AppointmentBannerType, Media } from '@payload-types'

import BannerSectionStyle from '@/components/marketing/appointment/BannerSection/BannerSectionStyle'
import { trpc } from '@/trpc/client'

export default function AppointmentBanner(data: AppointmentBannerType) {
  const { data: siteSettings } = trpc.siteSettings.getSiteSettings.useQuery()
  return (
    <>
      <BannerSectionStyle
        bgUrl='/images/appointments/banner_bg.svg'
        imgUrl={(data?.image as Media)?.url as string}
        title={data?.title}
        subTitle={data?.description}
        siteSettings={siteSettings?.cal_team}
      />
    </>
  )
}
