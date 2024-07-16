import parse from 'html-react-parser'
import Image from 'next/image'

export default function BannerSectionStyle5({
  bgUrl,
  imgUrl,
  title,
  subTitle,
}: {
  bgUrl: string
  imgUrl: string
  title: string
  subTitle: string
}) {
  return (
    <section
      className='cs_banner cs_style_5 cs_bg_filed'
      style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className='cs_banner_img'>
        <Image src={imgUrl} width={735} height={483} alt='Banner' />
      </div>
      <div className='container'>
        <div className='cs_banner_text'>
          <h2 className='cs_banner_title cs_fs_72'>{parse(title)}</h2>
          <p className='cs_banner_subtitle cs_fs_20 cs_heading_color mb-0'>
            {parse(subTitle)}
          </p>
        </div>
      </div>
    </section>
  )
}
