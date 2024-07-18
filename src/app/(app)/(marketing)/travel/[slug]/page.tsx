import { Tour } from '@payload-types'

import TravelToursView from '@/components/marketing/travel'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    slug: string
  }
}
async function page({ params }: PageProps) {
  const tourDetails = await serverClient.tour.getTourBySlug({
    slug: params?.slug,
  })
  return <TravelToursView tourDetails={tourDetails as Tour} />
}

export default page
