import { Tag } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsletterForm({
  btnArrowUrl,
  tag,
}: {
  btnArrowUrl: string
  tag: Tag
}) {
  return (
    <>
      <form action='#' className='cs_newsletter_form'>
        {/* <input
          type='text'
          className='cs_form_field'
          placeholder='example@email.com'
        /> */}
        <Link href={tag?.button_link || ''} className='cs_btn cs_style_1'>
          <span>{tag?.button_name}</span>
          <i>
            <Image src={btnArrowUrl} alt='Icon' height={11} width={15} />
            <Image src={btnArrowUrl} alt='Icon' height={11} width={15} />
          </i>
        </Link>
      </form>
    </>
  )
}
