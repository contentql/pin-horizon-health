import Image from 'next/image'

export default function ListStyle2({
  heading,
  iconUrl,
  phoneNumber,
  email,
}: {
  heading: string
  iconUrl: string
  phoneNumber: number
  email: string
}) {
  return (
    <div className='cs_list cs_style_2'>
      <h2 className='cs_list_title cs_medium cs_fs_24'>
        <Image src={iconUrl} alt='Icon' height={22} width={22} />
        {heading}
      </h2>
      <ul className='cs_mp0 cs_heading_color'>
        <li>
          <Image
            src='/images/icons/call.svg'
            width={12}
            height={12}
            alt='Icon'
          />
          {phoneNumber}
        </li>
        <li>
          <Image
            src='/images/icons/envlope.svg'
            width={12}
            height={12}
            alt='Icon'
          />
          {email}
        </li>
      </ul>
    </div>
  )
}
