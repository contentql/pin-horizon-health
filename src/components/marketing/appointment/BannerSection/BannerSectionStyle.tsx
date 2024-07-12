import Button from '../Button'
import parse from 'html-react-parser'
import Image from 'next/image'

import Spacing from './spacing'

export default function BannerSectionStyle({
  bgUrl,
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
}: any) {
  return (
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
  )
}
