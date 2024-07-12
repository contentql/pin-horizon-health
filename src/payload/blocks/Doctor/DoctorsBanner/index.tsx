import { DoctorBannerType } from '@payload-types'

import DoctorsBanner from '@/components/marketing/doctor/DoctorsBanner'

function DoctorBanner(bannerData: DoctorBannerType) {
  return <DoctorsBanner bannerData={bannerData} />
}

export default DoctorBanner
