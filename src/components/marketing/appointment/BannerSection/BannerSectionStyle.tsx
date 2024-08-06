import Button from '../../about/Button'
import parse from 'html-react-parser'
import Image from 'next/image'

import CalComponent from '@/components/common/CalComponent'
import Section from '@/components/common/Section'

import Spacing from './spacing'

export default function BannerSectionStyle({
  bgUrl,
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
  siteSettings,
}: any) {
  return (
    <>
      <section
        className='cs_banner cs_style_3 cs_bg_filed'
        style={{ backgroundImage: `url(${bgUrl})` }}>
        <div className='cs_banner_img'>
          <Image
            src={imgUrl}
            alt='Banner'
            className='cs_main_banner_img'
            width={700}
            height={700}
          />
        </div>
        <div className='container'>
          <div className='cs_banner_text'>
            <h2 className='cs_banner_title cs_fs_72'>{parse(title)}</h2>
            <p className='cs_banner_subtitle cs_fs_20 cs_heading_color mb-0'>
              {parse(subTitle)}
            </p>
            {btnText && (
              <>
                <Spacing md='25' lg='25' xl='25' />
                <Button btnUrl={btnUrl} btnText={btnText} variant={undefined} />
              </>
            )}
          </div>
        </div>
      </section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='cs_fs_40 cs_medium mb-0'>Book An Appoinment</h2>
              <div className='cs_height_42 cs_height_xl_25' />
              <CalComponent url={siteSettings} />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
