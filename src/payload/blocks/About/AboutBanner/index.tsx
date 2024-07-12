import { AboutBannerType, Media } from '@payload-types'
import parser from 'html-react-parser'

export default function AboutBanner(data: AboutBannerType) {
  return (
    <div className='container'>
      <div
        className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${
          true ? 'text-center' : ''
        }`}
        style={{
          backgroundImage: `url(${(data?.background_image as Media)?.url || ''})`,
        }}>
        <h2 className='cs_banner_title cs_white_color cs_fs_72'>
          {parser(data?.title!)}
        </h2>
        <p className='cs_banner_subtitle cs_white_color cs_fs_20 m-0'>
          {parser(data?.sub_title!)}
        </p>
      </div>
    </div>
  )
}
