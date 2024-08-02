import { Hospital } from '@payload-types'

import HospitalView from '@/components/marketing/hospital'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    hospitalName: string
  }
}
async function page({ params }: PageProps) {
  const initialHospitalDetails = await serverClient.hospital.getHospitalByName({
    slug: params?.hospitalName,
  })
  return (
    <HospitalView
      slugName={params?.hospitalName}
      initialHospitalDetails={initialHospitalDetails as Hospital}
    />
  )
}

export default page
