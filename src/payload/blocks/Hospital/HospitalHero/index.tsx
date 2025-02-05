'use client'

import { HospitalHeroType, Media } from '@payload-types'

import Hero from '@/components/marketing/doctor/Hero'

function HospitalHero(hospitalHeroData: HospitalHeroType) {
  return (
    <>
      <Hero
        bgUrl={(hospitalHeroData?.bgUrl as Media)?.url!}
        imgUrl={(hospitalHeroData?.imgUrl as Media)?.url!}
        title={hospitalHeroData?.title}
        subTitle={hospitalHeroData?.sub_title}
      />
    </>
  )
}

export default HospitalHero
