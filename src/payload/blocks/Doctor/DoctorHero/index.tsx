'use client'

import { Doctor, DoctorHeroType, Media } from '@payload-types'

import Section from '@/components/common/Section'
import DoctorListItem from '@/components/marketing/doctor/DoctorsListItems'
import Hero from '@/components/marketing/doctor/Hero'
import { trpc } from '@/trpc/client'

function DoctorHero(doctorHero: DoctorHeroType) {
  const { data: doctorsData } = trpc.doctor.getallDoctors.useQuery()
  return (
    <>
      <Hero
        bgUrl={(doctorHero?.bgUrl as Media)?.url!}
        imgUrl={(doctorHero?.imgUrl as Media)?.url!}
        title={doctorHero?.title}
        subTitle={doctorHero?.sub_title}
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <DoctorListItem doctorsData={doctorsData as Doctor[]} />
      </Section>
      {/* <Section className='cs_footer_margin_0'>
        <BannerSectionStyle4
          bgUrl='/images/doctors/banner_bg_2.jpeg'
          title='Don’t Let Your Health <br />Take a Backseat!'
          subTitle='Schedule an appointment with one of our experienced <br />medical professionals today!'
        />
      </Section>  */}
    </>
  )
}

export default DoctorHero
