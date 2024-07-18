'use client'

import { Department, DoctorHeroType, Media } from '@payload-types'

import Section from '@/components/common/Section'
import DoctorListItem from '@/components/marketing/doctor/DoctorsListItems'
import Hero from '@/components/marketing/doctor/Hero'
import { trpc } from '@/trpc/client'

function HospitalHero(doctorHero: DoctorHeroType) {
  const { data: departmentDetails } =
    trpc.department.getDepartmentsByType.useQuery({ name: 'Doctor' })
  return (
    <>
      <Hero
        bgUrl={(doctorHero?.bgUrl as Media)?.url!}
        imgUrl={(doctorHero?.imgUrl as Media)?.url!}
        title={doctorHero?.title}
        subTitle={doctorHero?.sub_title}
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <DoctorListItem departmentDetails={departmentDetails as Department[]} />
      </Section>
    </>
  )
}

export default HospitalHero