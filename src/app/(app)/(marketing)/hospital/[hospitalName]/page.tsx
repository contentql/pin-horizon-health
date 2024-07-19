import { Hospital } from '@payload-types'

import HospitalView from '@/components/marketing/hospital'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    hospitalName: string
  }
}
async function page({ params }: PageProps) {
  const hospitalDetails = await serverClient.hospital.getHospitalByName({
    slug: params?.hospitalName,
  })
  return <HospitalView hospitalDetails={hospitalDetails as Hospital} />
}

export default page
