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
      {/* <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className='cs_footer_margin_0'>
        <BannerSectionStyle4
          bgUrl='/images/doctors/banner_bg_2.jpeg'
          title='Don’t Let Your Health <br />Take a Backseat!'
          subTitle='Schedule an appointment with one of our experienced <br />medical professionals today!'
        />
      </Section> */}
    </>
  )
}

export default DoctorHero
