import { Yoga } from '@payload-types'

import YogaDetails from '@/components/marketing/yoga/YogaDetails'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: { yogaSlug: string }
}
const page = async ({ params }: PageProps) => {
  const yogaDetails = await serverClient.yoga.getYogaByName({
    yogaName: params?.yogaSlug,
  })
  return <YogaDetails yogaDetails={yogaDetails as Yoga} />
}

export default page
