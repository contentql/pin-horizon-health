import { BannerType, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

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
        <p className='cs_banner_subtitle cs_heading_color cs_fs_20 cs_medium mb-10'>
          {data?.sub_title}
        </p>
        <div className='cs_hero_info_col'>
          <Link href={data?.button_path || '/'} className='cs_btn cs_style_1'>
            <span>{data?.button_text}</span>
            <i>
              <Image
                src='/images/icons/arrow_white.svg'
                alt='Icon'
                height={0}
                width={0}
                style={{ width: '16px', height: 'auto' }}
              />
              <Image
                src='/images/icons/arrow_white.svg'
                alt='Icon'
                height={0}
                width={0}
                style={{ width: '16px', height: 'auto' }}
              />
            </i>
          </Link>
        </div>
      </div>
    </div>
  )
}
