import Image from 'next/image'

type FeatureProps = {
  title?: string | null
  description?: string | null
  feature_icon?: ('1' | '2' | '3' | '4' | '5') | null
  id?: string | null
}

const featureListData = {
  '1': '/images/home_1/compassion.svg',
  '2': '/images/home_1/excellence.svg',
  '3': '/images/home_1/integrity.svg',
  '4': '/images/home_1/respect.svg',
  '5': '/images/home_1/teamwork.svg',
}

export default function Feature({
  title,
  description,
  feature_icon,
}: FeatureProps) {
  return (
    <div className='cs_feature cs_style_1 cs_shadow_1 cs_radius_25 cs_white_bg'>
      <h2 className='cs_feature_title cs_semibold cs_fs_40 cs_center'>
        <span className='cs_feature_icon cs_accent_bg cs_center rounded-circle'>
          <Image
            src={featureListData[feature_icon!]}
            alt='Icon'
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
