'use client'

import { Tour } from '@payload-types'

import Breadcrumbs from '@/components/common/Breadcrumbs'

import { Gallery } from './Gallery'
import TourDetails from './TourDetails'

const TravelToursView = ({ tourDetails }: { tourDetails: Tour }) => {
  return (
    <>
      <Breadcrumbs />
      <Gallery images={tourDetails?.gallery} />
      <TourDetails tourDetails={tourDetails} />
    </>
  )
}

export default TravelToursView
