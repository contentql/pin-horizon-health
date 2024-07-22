import Image from 'next/image'
import Link from 'next/link'

export default function Button({ btnUrl, btnText, variant }: any) {
  return (
    <Link href={btnUrl} className={`cs_btn cs_style_1 ${variant}`}>
      <span>{btnText}</span>
      <i>
        <Image
          src='/images/icons/arrow_white.svg'
          alt='Icon'
          height={0}
          width={0}
          style={{ height: 'auto', width: '15px' }}
        />
        <Image
          src='/images/icons/arrow_white.svg'
          alt='Icon'
          height={0}
          width={0}
          style={{ height: 'auto', width: '15px' }}
        />
      </i>
    </Link>
  )
}
