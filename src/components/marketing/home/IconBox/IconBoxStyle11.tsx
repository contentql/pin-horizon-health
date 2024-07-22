import Image from 'next/image'

export default function IconBoxStyle11({
  title,
  subTitle,
  iconSrc,
}: {
  title: string
  subTitle: string
  iconSrc: string
}) {
  return (
    <div className='cs_iconbox cs_style_11 cs_radius_25'>
      <div className='cs_iconbox_icon'>
        <Image src={iconSrc} alt='Icon' height={0} width={0} />
      </div>
      <div className='cs_iconbox_right'>
        <h3 className='cs_iconbox_title cs_fs_24 mb-0'>{title}</h3>
        <p className='cs_iconbox_subtitle cs_heading_color mb-0'>{subTitle}</p>
      </div>
    </div>
  )
}
