import parser from 'html-react-parser'
import Image from 'next/image'

const featureListData = {
  '1': '/images/icons/professional.svg',
  '2': '/images/icons/comprehensive.svg',
  '3': '/images/icons/patient.svg',
  '4': '/images/icons/facilities.svg',
}

export default function IconBoxStyle6({
  feature,
}: {
  feature: {
    title?: string | null
    sub_title?: string | null
    feature_icon?: ('1' | '2' | '3' | '4') | null
    id?: string | null
  }
}) {
  return (
    <div className='cs_iconbox cs_style_6'>
      <div className='cs_iconbox_icon cs_center cs_accent_bg rounded-circle'>
        <Image
          src={featureListData[feature?.feature_icon!]}
          alt='Icon'
          height={18}
          width={18}
        />
      </div>
      <h2 className='cs_iconbox_title cs_fs_32 cs_semibold'>
        {parser(feature?.title!)}
      </h2>
      <p className='cs_iconbox_subtitle m-0'>{parser(feature?.sub_title!)}</p>
    </div>
  )
}
