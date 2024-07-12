import { DoctorBannerType, Media } from '@payload-types'
import parser from 'html-react-parser'

export default function DoctorsBanner({
  bannerData,
  center,
}: {
  bannerData: DoctorBannerType
  center?: any
}) {
  return (
    <div className='cs_footer_margin_0 container'>
      <div
        className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${
          center ? 'text-center' : ''
        }`}
        style={{
          backgroundImage: `url(${(bannerData?.bgUrl as Media)?.url || ''})`,
        }}>
        <h2 className='cs_banner_title cs_white_color cs_fs_72'>
          {parser(bannerData?.title)}
        </h2>
        <p className='cs_banner_subtitle cs_white_color cs_fs_20 m-0'>
          {parser(bannerData?.sub_title)}
        </p>
      </div>
    </div>
  )
}
