'use client'

import bannerImg from '../../../../public/images/doctors/banner_img_3.png'
import appointmentImg from '../../../../public/images/home_2/appointment_img.png'
import Breadcrumbs from '../../common/Breadcrumbs'
import { Doctor } from '@payload-types'

import Section from '@/components/common/Section'

import Appointment from './Appointment'
import DoctorBanner2 from './DoctorBanner2'
import DoctorDetails from './DoctorDetails'

const DoctorDetailsView = ({ doctorDetails }: { doctorDetails: Doctor }) => {
  return (
    <>
      <Breadcrumbs />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <DoctorDetails doctorDetails={doctorDetails} />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <Appointment
          bgUrl='/images/home_2/appointment_bg.svg'
          imgUrl={appointmentImg}
          sectionTitle='Appointment'
          sectionTitleUp='BOOK AN'
          doctorId={doctorDetails?.id}
          doctorCal={doctorDetails?.cal_user as string}
        />
      </Section>
      <Section>
        <DoctorBanner2
          title='Don’t Let Your Health <br />Take a Backseat!'
          subTitle='Schedule an appointment with one of our experienced <br />medical professionals today!'
          imgUrl={bannerImg}
        />
      </Section>
    </>
  )
}

export default DoctorDetailsView
