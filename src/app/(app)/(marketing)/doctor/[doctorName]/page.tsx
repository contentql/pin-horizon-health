import { Doctor } from '@payload-types'

import DoctorDetailsView from '@/components/marketing/doctor'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: { doctorName: string }
}
const page = async ({ params }: PageProps) => {
  const doctorDetails = await serverClient.doctor.getDoctorByName({
    doctorName: params?.doctorName,
  })
  console.log('params', params, doctorDetails)
  return <DoctorDetailsView doctorDetails={doctorDetails as Doctor} />
}

export default page
