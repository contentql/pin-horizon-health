'use client'

import bannerImg from '../../../../public/images/doctors/banner_img_3.png'
import appointmentImg from '../../../../public/images/home_2/appointment_img.png'
import Breadcrumbs from '../../common/Breadcrumbs'
import { env } from '@env'
import { Doctor } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { notFound } from 'next/navigation'

import Section from '@/components/common/Section'
import { trpc } from '@/trpc/client'

import Appointment from './Appointment'
import DoctorBanner2 from './DoctorBanner2'
import DoctorDetails from './DoctorDetails'

const DoctorDetailsView = ({
  initialDoctorDetails,
  slugName,
}: {
  initialDoctorDetails: Doctor
  slugName: string
}) => {
  const { data: doctorData } = trpc.doctor.getDoctorByName.useQuery(
    { doctorName: slugName },
    { initialData: initialDoctorDetails },
  )

  // Fetch page data for live preview
  const { data: livePreviewData } = useLivePreview<Doctor | undefined>({
    initialData: undefined,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const doctorDetails = (livePreviewData || doctorData) as Doctor

  return doctorDetails === undefined ? (
    notFound()
  ) : (
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
