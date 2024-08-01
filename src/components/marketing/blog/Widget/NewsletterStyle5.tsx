import NewsletterForm from '../NewsLetter'
import { Tag } from '@payload-types'

export default function NewsletterStyle5({ tag }: { tag: Tag }) {
  return (
    <div className='cs_newsletter cs_style_5'>
      <h2 className='cs_newsletter_title'>{tag?.heading}</h2>
      <p className='text-lg text-gray-600'>{tag?.description}</p>
      <NewsletterForm btnArrowUrl='/images/icons/arrow_white.svg' tag={tag} />
    </div>
  )
}
