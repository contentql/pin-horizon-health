'use client'

import { Hospital, HospitalHeroType, Media } from '@payload-types'

import Section from '@/components/common/Section'
import Hero from '@/components/marketing/doctor/Hero'
import HospitalListItem from '@/components/marketing/hospital/HospitalListItems'
import { trpc } from '@/trpc/client'

function HospitalHero(hospitalHeroData: HospitalHeroType) {
  const { data: hospitalDetails } = trpc.hospital.getallHospitals.useQuery()
  return (
    <>
      <Hero
        bgUrl={(hospitalHeroData?.bgUrl as Media)?.url!}
        imgUrl={(hospitalHeroData?.imgUrl as Media)?.url!}
        title={hospitalHeroData?.title}
        subTitle={hospitalHeroData?.sub_title}
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <HospitalListItem hospitalDetails={hospitalDetails as Hospital[]} />
      </Section>
    </>
  )
}

export default HospitalHero
