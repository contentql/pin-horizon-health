import { Media } from '@payload-types'
import Image from 'next/image'

type FeatureProps = {
  title?: string | null
  description?: string | null
  icon_image?: string | Media | null
  id?: string | null
}

export default function Feature({
  title,
  description,
  icon_image,
}: FeatureProps) {
  return (
    <div className='cs_feature cs_style_1 cs_shadow_1 cs_radius_25 cs_white_bg'>
      <h2 className='cs_feature_title cs_semibold cs_fs_40 cs_center'>
        <span className='cs_feature_icon cs_accent_bg cs_center rounded-circle'>
          <Image
            src={(icon_image as Media)?.url || ''}
            alt={(icon_image as Media)?.alt || 'Icon'}
            height={25}
            width={25}
          />
        </span>
        <span>{title}</span>
      </h2>
      <p className='m-0 text-center'>{description}</p>
    </div>
  )
}
