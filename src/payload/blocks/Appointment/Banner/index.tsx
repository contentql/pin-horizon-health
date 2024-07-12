'use client'

import { AppointmentBannerType, Media } from '@payload-types'

import BannerSectionStyle from '@/components/marketing/appointment/BannerSection/BannerSectionStyle'

export default function AppointmentBanner(data: AppointmentBannerType) {
  return (
    <>
      <BannerSectionStyle
        bgUrl='/images/appointments/banner_bg.svg'
        imgUrl={(data?.image as Media)?.url as string}
        title={data?.title}
        subTitle={data?.description}
      />
    </>
  )
}
