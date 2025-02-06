'use server'

import { Params } from '../types'
import configPromise from '@payload-config'
import { Blog, DetailsType, Doctor, Hospital } from '@payload-types'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import BlogDetails from '@/components/marketing/blog/BlogDetails'
import DoctorDetailsView from '@/components/marketing/doctor'
import HospitalView from '@/components/marketing/hospital'

interface DetailsProps extends DetailsType {
  params: Params
}

const Details: React.FC<DetailsProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  switch (block?.collectionSlug) {
    case 'blogs': {
      const slug = params?.route?.at(-1) ?? ''
      const decodedSlug = decodeURIComponent(slug)
      const { docs: blog } = await payload.find({
        collection: 'blogs',
        draft: false,
        where: {
          slug: {
            equals: decodedSlug,
          },
        },
      })
      const { docs: blogsData } = await payload.find({
        collection: 'blogs',
        pagination: false,
        draft: false,
      })
      const blogData = blog?.at(0)
      if (!blogData) {
        notFound()
      }

      return (
        <BlogDetails
          blogSlug={decodedSlug}
          initialBlogData={blogData as Blog}
          blogsData={blogsData}
        />
      )
    }

    case 'doctors': {
      const slug = params?.route?.at(-1) ?? ''

      const { docs: doctorDetails } = await payload.find({
        collection: 'doctors',
        where: {
          slug: {
            equals: slug,
          },
        },
      })

      const doctor = doctorDetails?.at(0)

      // if tag not found showing 404
      if (!doctor) {
        return notFound()
      }

      return (
        <DoctorDetailsView
          slugName={slug}
          initialDoctorDetails={doctor as Doctor}
        />
      )
    }

    case 'hospital': {
      const slug = params?.route?.at(-1) ?? ''

      const { docs: hospitals } = await payload.find({
        collection: 'hospital',
        where: {
          slug: {
            equals: slug,
          },
        },
        draft: false,
      })

      const hospital = hospitals?.[0]

      if (!hospital) {
        return notFound()
      }

      return (
        <HospitalView
          slugName={slug}
          initialHospitalDetails={hospital as Hospital}
        />
      )
    }
  }
}

export default Details
