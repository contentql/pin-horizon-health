import { HeroType, Media } from '@payload-types'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

import VideoModal from '@/components/marketing/home/VideoModal'

const infoList = {
  '1': '/images/contact/icon_1.svg',
  '2': '/images/icons/ambulance.svg',
  '3': '/images/icons/pin.svg',
}

export default function Hero(data: HeroType) {
  return (
    <section className='cs_hero cs_style_1'>
      <div
        className='cs_hero_wrap cs_bg_filed'
        style={{
          backgroundImage: `url(${(data?.background_image as Media)?.url || ''})`,
        }}>
        <div className='container'>
          <div className='cs_hero_text'>
            <h1 className='cs_hero_title cs_fs_94'>{parse(data?.title!)}</h1>
            <p className='cs_hero_subtitle cs_fs_20 cs_heading_color'>
              {parse(data?.sub_title!)}
            </p>
            <div className='cs_hero_btn_wrap'>
              <VideoModal
                videoUrl={data?.video_url}
                videoBtnText={data?.button_text}
                variant='cs_heading_color'
              />
            </div>
          </div>
          <div className='cs_hero_img'>
            <Image
              src={(data?.hero_image as Media)?.url || ''}
              alt={(data?.hero_image as Media)?.alt || 'Hero'}
              // placeholder='blur'
              height={811}
              width={930}
            />
          </div>
          <div className='cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15'>
            {data?.contact_info?.map((item, index) => (
              <div className='cs_hero_info_col' key={index}>
                <div className='cs_hero_info d-flex align-items-center'>
                  <div className='cs_hero_info_icon cs_center rounded-circle cs_accent_bg'>
                    <Image
                      src={infoList[item?.contact_icon!]}
                      alt='Icon'
                      height={33}
                      width={33}
                    />
                  </div>
                  <div className='cs_hero_info_right'>
                    <h3 className='cs_hero_info_title cs_semibold'>
                      {item?.title}
                    </h3>
                    <p className='cs_hero_info_subtitle cs_fs_20'>
                      {item?.sub_title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className='cs_hero_info_col'>
              <Link
                href={data?.button_url || '/'}
                className='cs_btn cs_style_1'>
                <span>{data?.button_text}</span>
                <i>
                  <Image
                    src='/images/icons/arrow_white.svg'
                    alt='Icon'
                    height={11}
                    width={16}
                  />
                  <Image
                    src='/images/icons/arrow_white.svg'
                    alt='Icon'
                    height={11}
                    width={16}
                  />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
