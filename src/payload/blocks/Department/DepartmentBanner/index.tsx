import { DepartmentBannerType, Media } from '@payload-types'
import parse from 'html-react-parser'
import Image from 'next/image'

export default function DepartmentBanner(bannerData: DepartmentBannerType) {
  return (
    <div className='container'>
      <div className='cs_banner cs_style_6 cs_white_bg cs_radius_30'>
        <div className='cs_banner_img'>
          <Image
            src={(bannerData?.imgUrl as Media)?.url!}
            alt='Banner'
            width={1000}
            height={1000}
          />
        </div>
        <h2 className='cs_banner_title cs_fs_72'>{parse(bannerData?.title)}</h2>
        <p className='cs_banner_subtitle cs_heading_color cs_fs_20 cs_medium m-0'>
          {parse(bannerData?.sub_title)}
        </p>
      </div>
    </div>
  )
}
