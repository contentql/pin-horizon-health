import Section from '@/components/common/Section'
import ContactForm from '@/components/marketing/ContactForm'
import ContactInfoSection from '@/components/marketing/ContactForm/ContactInfoSection'
import BannerSectionStyle5 from '@/components/marketing/appointment/BannerSection/BannerSectionStyle5'

export default function Contact() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl='/images/contact/banner_bg.svg'
        imgUrl={'/images/about/banner_img.png'}
        title='Contact Us'
        subTitle='Kindly reach us to get the fastest response and treatment'
      />
      <div className='cs_mt_minus_110 container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <ContactForm />
          </div>
        </div>
      </div>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}>
        <ContactInfoSection sectionTitle='Find Us Here' />
      </Section>
    </>
  )
}
