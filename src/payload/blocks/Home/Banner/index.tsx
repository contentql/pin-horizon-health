import { BannerType, Media } from '@payload-types'
import Image from 'next/image'

export default function Banner(data: BannerType) {
  return (
    <div className='container'>
      <div
        className='cs_banner cs_style_1 cs_bg_filed'
        style={{ backgroundImage: `url(/images/home_1/cta_bg.svg)` }}>
        <div className='cs_banner_img'>
          <Image
            src={(data?.image as Media)?.url || ''}
            alt={(data?.image as Media)?.alt || 'Banner'}
            // placeholder='blur'
            width={535}
            height={560}
          />
        </div>

        <h2 className='cs_banner_title cs_white_color cs_fs_72'>
          {data?.title}
        </h2>
        <p className='cs_banner_subtitle cs_heading_color cs_fs_20 cs_medium m-0'>
          {data?.sub_title}
        </p>
      </div>
    </div>
  )
}
