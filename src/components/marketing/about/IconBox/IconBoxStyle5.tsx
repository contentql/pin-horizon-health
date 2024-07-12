import { Media } from '@payload-types'
import Image from 'next/image'

export default function IconBoxStyle5({
  award,
}: {
  award: {
    title?: string | null
    image?: string | Media | null
    id?: string | null
  }
}) {
  return (
    <div className='cs_iconbox cs_style_5 cs_white_bg cs_radius_15'>
      <div className='cs_iconbox_icon cs_center cs_accent_bg cs_radius_15'>
        <Image
          src={(award?.image as Media)?.url || ''}
          alt={(award?.image as Media)?.url || 'Icon'}
          height={69}
          width={58}
        />
      </div>
      <h2 className='cs_iconbox_title cs_fs_20 cs_medium m-0'>
        {award?.title}
      </h2>
    </div>
  )
}
