import { Doctor } from '@payload-types'
import { Metadata } from 'next'

import DoctorDetailsView from '@/components/marketing/doctor'
import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

interface PageProps {
  params: { doctorName: string }
}
const page = async ({ params }: PageProps) => {
  const initialDoctorDetails = await serverClient.doctor.getDoctorByName({
    doctorName: params?.doctorName,
  })

  return (
    <DoctorDetailsView
      slugName={params?.doctorName}
      initialDoctorDetails={initialDoctorDetails as Doctor}
    />
  )
}

export const generateStaticParams = async () => {
  const allDoctors = await serverClient.doctor.getallDoctors()

  const doctorIdsArray = allDoctors?.map(doctor => ({
    doctorName: doctor?.slug,
  }))

  return doctorIdsArray
}

export const generateMetadata = async ({
  params: { doctorName },
}: {
  params: { doctorName: string }
}): Promise<Metadata> => {
  let doctor: Doctor | null = null

  try {
    const result = await serverClient.doctor.getDoctorByName({
      doctorName: doctorName,
    })

    doctor = result as Doctor
  } catch (error) {
    console.error('Error fetching doctor:', error)
  }

  // ? collectionSlug is the name of the page eg.: http://localhost:3000/doctor/[id] (`doctor` is the collectionSlug)
  return generateMeta({ doc: doctor, collectionSlug: 'doctor' })
}

export default page
