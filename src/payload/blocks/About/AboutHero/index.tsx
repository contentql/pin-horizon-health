import { AboutHeroType, Media } from '@payload-types'
import parse from 'html-react-parser'
import Image from 'next/image'

export default function AboutHero(data: AboutHeroType) {
  return (
    <section
      className='cs_banner cs_style_3 cs_bg_filed'
      style={{ backgroundImage: `url(/images/about/banner_bg.svg)` }}>
      <div className='cs_banner_img'>
        <Image
          src={(data?.image as Media)?.url || ''}
          alt={(data?.image as Media)?.alt || 'Banner'}
          className='cs_main_banner_img'
          // placeholder='blur'
          width={736}
          height={484}
        />
      </div>
      <div className='container'>
        <div className='cs_banner_text'>
          <h2 className='cs_banner_title cs_fs_72'>{parse(data?.title!)}</h2>
          <p className='cs_banner_subtitle cs_fs_20 cs_heading_color mb-0'>
            {parse(data?.sub_title!)}
          </p>
          {/* {btnText && (
            <>
              <Spacing md='25' lg='25' xl='25' />
              <Button btnUrl={btnUrl} btnText={btnText} />
            </>
          )} */}
        </div>
      </div>
    </section>
  )
}
