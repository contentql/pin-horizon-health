import { DoctorHeroType, Media, Tour } from '@payload-types'

import Section from '@/components/common/Section'
import Hero from '@/components/marketing/doctor/Hero'
import TravelTourList from '@/components/marketing/travel/TravelTourList'
import { trpc } from '@/trpc/client'

function TravelHero(doctorHero: DoctorHeroType) {
  const { data: tours } = trpc.tour.getTours.useQuery()
  return (
    <>
      <Hero
        bgUrl={(doctorHero?.bgUrl as Media)?.url!}
        imgUrl={(doctorHero?.imgUrl as Media)?.url!}
        title={doctorHero?.title}
        subTitle={doctorHero?.sub_title}
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TravelTourList tours={tours as Tour[]} />
      </Section>
    </>
  )
}

export default TravelHero
