import { Media } from '@payload-types'
import Image from 'next/image'

type AwardProps = {
  title?: string | null
  sub_title?: string | null
  award_image?: string | Media | null
  id?: string | null
}
export default function IconBoxStyle1({
  title,
  sub_title,
  award_image,
}: AwardProps) {
  return (
    <div className='cs_iconbox cs_style_1 cs_shadow_1 cs_radius_15'>
      <div className='cs_iconbox_top'>
        <div className='cs_iconbox_icon cs_radius_15 cs_accent_bg cs_center'>
          <Image
            src={(award_image as Media)?.url || ''}
            alt={(award_image as Media)?.alt || 'Icon'}
            height={70}
            width={60}
          />
        </div>
        <h2 className='cs_iconbox_title cs_medium cs_fs_20 m-0'>{title}</h2>
      </div>
      <p className='cs_iconbox_text'>{sub_title}</p>
    </div>
  )
}
