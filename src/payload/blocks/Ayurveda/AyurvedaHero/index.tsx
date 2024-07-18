'use client'

import { AyurvedaHeroType, Media } from '@payload-types'

import Hero from '@/components/marketing/doctor/Hero'

function AyurvedaHero(data: AyurvedaHeroType) {
  return (
    <>
      <Hero
        bgUrl={'/images/doctors/banner_bg.svg'}
        imgUrl={(data?.image as Media)?.url!}
        title={data?.title}
        subTitle={data?.sub_title}
      />
    </>
  )
}

export default AyurvedaHero
