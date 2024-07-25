import Image from 'next/image'
import Link from 'next/link'

export default function IconBoxStyle4({
  service,
}: {
  service: {
    title?: string | null
    sub_title?: string | null
    service_path?: string | null
    id?: string | null
  }
}) {
  return (
    <div className='cs_iconbox cs_style_4'>
      <div className='cs_iconbox_icon cs_accent_bg rounded-circle cs_center'>
        <Image
          src='/images/icons/calendar_white.svg'
          alt='Icon'
          height={19}
          width={19}
        />
      </div>
      <h2 className='cs_iconbox_title cs_fs_32'>{service?.title}</h2>
      <p className='cs_iconbox_subtitle m-0 line-clamp-3'>
        {service?.sub_title}
      </p>
      <Link
        href={service?.service_path || '/'}
        className='cs_iconbox_btn cs_center'>
        <Image
          src='/images/icons/arrow_white.svg'
          alt='Icon'
          height={24}
          width={35}
        />
        <Image
          src='/images/icons/arrow_white.svg'
          alt='Icon'
          height={24}
          width={35}
        />
      </Link>
    </div>
  )
}
