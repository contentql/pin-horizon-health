'use client'

import { CommonHeroType, Media } from '@payload-types'

import Hero from '@/components/marketing/doctor/Hero'

function CommonHero(commonHero: CommonHeroType) {
  return (
    <>
      <Hero
        bgUrl={(commonHero?.bgUrl as Media)?.url!}
        imgUrl={(commonHero?.imgUrl as Media)?.url!}
        title={commonHero?.title}
        subTitle={commonHero?.sub_title}
      />
    </>
  )
}

export default CommonHero
