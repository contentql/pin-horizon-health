import parse from 'html-react-parser'
import Image from 'next/image'

export default function DoctorBanner2({
  imgUrl,
  title,
  subTitle,
}: {
  imgUrl: any
  title: string
  subTitle: string
}) {
  return (
    <div className='container'>
      <div className='cs_banner cs_style_9 cs_white_bg cs_radius_30'>
        <div className='cs_banner_img'>
          <Image src={imgUrl} alt='Banenr' placeholder='blur' />
        </div>
        <h2 className='cs_banner_title cs_fs_72'>{parse(title)}</h2>
        <p className='cs_banner_subtitle cs_fs_20 cs_medium m-0'>
          {parse(subTitle)}
        </p>
      </div>
    </div>
  )
}
