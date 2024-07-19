import { Ayurveda } from '@payload-types'

import AyurvedaDetails from '@/components/marketing/ayurveda/AyurvedaDetails'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: { ayurvedaSlug: string }
}
const page = async ({ params }: PageProps) => {
  const ayurvedaDetails = await serverClient.ayurveda.getAyurvedaByName({
    ayurvedaName: params?.ayurvedaSlug,
  })
  return <AyurvedaDetails ayurvedaDetails={ayurvedaDetails as Ayurveda} />
}

export default page
