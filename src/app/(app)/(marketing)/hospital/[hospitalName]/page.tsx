import { Hospital } from '@payload-types'
import { Metadata } from 'next'

import HospitalView from '@/components/marketing/hospital'
import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

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

export const generateStaticParams = async () => {
  const allHospitals = await serverClient.hospital.getallHospitals()

  const hospitalIdsArray = allHospitals?.map(hospital => ({
    hospitalName: hospital?.slug,
  }))

  return hospitalIdsArray
}

export const generateMetadata = async ({
  params: { hospitalName },
}: {
  params: { hospitalName: string }
}): Promise<Metadata> => {
  let hospital: Hospital | null = null

  try {
    const result = await serverClient.hospital.getHospitalByName({
      slug: hospitalName,
    })

    hospital = result as Hospital
  } catch (error) {
    console.error('Error fetching doctor:', error)
  }

  return generateMeta({ doc: hospital, collectionSlug: 'hospital' })
}

export default page
