'use client'

import { Gallery } from '../travel/Gallery'
import { env } from '@env'
import { Hospital } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { notFound } from 'next/navigation'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import { trpc } from '@/trpc/client'

import HospitalDetails from './HospitalDetails'

const HospitalView = ({
  initialHospitalDetails,
  slugName,
}: {
  initialHospitalDetails: Hospital
  slugName: string
}) => {
  const { data: hospitalDetailsData } =
    trpc.hospital.getHospitalByName.useQuery(
      { slug: slugName },
      { initialData: initialHospitalDetails },
    )

  // Fetch page data for live preview
  const { data: livePreviewData } = useLivePreview<Hospital | undefined>({
    initialData: undefined,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const hospitalData = (livePreviewData || hospitalDetailsData) as Hospital

  return hospitalData?.title === undefined ? (
    notFound()
  ) : (
    <>
      <Breadcrumbs />
      <Gallery images={hospitalData?.gallery} />
      <HospitalDetails hospitalDetails={hospitalData} />
    </>
  )
}

export default HospitalView
