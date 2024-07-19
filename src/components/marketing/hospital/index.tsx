'use client'

import { Hospital } from '@payload-types'

import Breadcrumbs from '@/components/common/Breadcrumbs'

import { Gallery } from './Gallery'
import HospitalDetails from './HospitalDetails'

const HospitalView = ({ hospitalDetails }: { hospitalDetails: Hospital }) => {
  return (
    <>
      <Breadcrumbs />
      <Gallery images={hospitalDetails?.gallery} />
      <HospitalDetails hospitalDetails={hospitalDetails} />
    </>
  )
}

export default HospitalView
