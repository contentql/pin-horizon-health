import { DoctorHeroType, Media, Tour } from '@payload-types'

import Section from '@/components/common/Section'
import Hero from '@/components/marketing/doctor/Hero'
import Spacing from '@/components/marketing/home/Spacing'
import TravelItem from '@/components/marketing/travel/Traveltem'
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
      <div className='container'>
        <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
          <div className={`cs_team_grid cs_${'grid'}_view_wrap`}>
            {tours?.map((tour, index) => (
              <TravelItem tour={tour as Tour} key={index} />
            ))}
          </div>
          <Spacing md='110' lg='70' />
          {/* <Pagination meta={yogaData?.meta} setPage={setPage} page={page} /> */}
        </Section>
      </div>
    </>
  )
}

export default TravelHero
