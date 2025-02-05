'use client'

import { DoctorHeroType, Media } from '@payload-types'

import Hero from '@/components/marketing/doctor/Hero'

function DoctorHero(doctorHero: DoctorHeroType) {
  return (
    <>
      <Hero
        bgUrl={(doctorHero?.bgUrl as Media)?.url!}
        imgUrl={(doctorHero?.imgUrl as Media)?.url!}
        title={doctorHero?.title}
        subTitle={doctorHero?.sub_title}
      />
    </>
  )
}

export default DoctorHero
