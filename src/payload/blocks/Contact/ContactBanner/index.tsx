import { ContactBannerType, Media } from '@payload-types'

import ContactForm from '@/components/marketing/ContactForm'
import BannerSectionStyle5 from '@/components/marketing/appointment/BannerSection/BannerSectionStyle5'

export default function ContactBanner(data: ContactBannerType) {
  return (
    <>
      <BannerSectionStyle5
        bgUrl='/images/contact/banner_bg.svg'
        imgUrl={(data?.image as Media)?.url || ''}
        title={data?.title || ''}
        subTitle={data?.sub_title || ''}
      />
      <div className='cs_mt_minus_110 container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
