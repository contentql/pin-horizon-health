import { DoctorHeroType, Media } from '@payload-types'

import Hero from '@/components/marketing/doctor/Hero'
import TravelContactForm from '@/components/marketing/travel/TravelContactForm'
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
      <div className='cs_mt_minus_110 container pb-24'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <TravelContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default TravelHero
