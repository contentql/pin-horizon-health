'use client'

import { Category, Doctor, DoctorHeroType, Media } from '@payload-types'

import Section from '@/components/common/Section'
import DoctorListItem from '@/components/marketing/doctor/DoctorsListItems'
import Hero from '@/components/marketing/doctor/Hero'
import { trpc } from '@/trpc/client'

function DoctorHero(doctorHero: DoctorHeroType) {
  const { data: doctorsData } = trpc.doctor.getallDoctors.useQuery()
  const { data: categoriesData } = trpc.category.getallCategories.useQuery()
  return (
    <>
      <Hero
        bgUrl={(doctorHero?.bgUrl as Media)?.url!}
        imgUrl={(doctorHero?.imgUrl as Media)?.url!}
        title={doctorHero?.title}
        subTitle={doctorHero?.sub_title}
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <DoctorListItem
          doctorsData={doctorsData as Doctor[]}
          categoriesData={categoriesData as Category[]}
        />
      </Section>
    </>
  )
}

export default DoctorHero
