'use client'

import { Media, SiteSetting } from '@payload-types'
import Image from 'next/image'

import ContactInfoWidget from '@/components/marketing/home/Widget/ContactInfoWidget'
import MenuWidget from '@/components/marketing/home/Widget/MenuWidget'
import Newsletter from '@/components/marketing/home/Widget/Newsletter'
import SocialWidget from '@/components/marketing/home/Widget/SocialWidget'
import TextWidget from '@/components/marketing/home/Widget/TextWidget'

export default function Footer({
  initSiteSettingsData,
}: {
  initSiteSettingsData: SiteSetting
}) {
  return (
    <footer className='cs_footer cs_style_1 cs_heading_color'>
      <div
        className='cs_footer_logo_wrap'
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}>
        <div
          className='cs_footer_brand'
          style={{ backgroundImage: 'url(/images/footer_logo_bg.svg)' }}>
          <Image
            src={(initSiteSettingsData?.logoImage as Media)?.url!}
            alt='Logo Icon'
            height={0}
            width={50}
          />
          <h2 className='cs_footer_brand_text  '>
            {initSiteSettingsData?.appName}
          </h2>
        </div>
      </div>
      <div className='cs_footer_main'>
        <div className='container'>
          <div className='row flex justify-between'>
            <div className='col-lg-4'>
              <div className='cs_footer_item'>
                <TextWidget text={initSiteSettingsData?.appName} />
                <ContactInfoWidget
                  contactInfo={
                    initSiteSettingsData?.footer?.personal_information
                  }
                />
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='cs_footer_item'>
                <MenuWidget data={initSiteSettingsData?.footer?.links} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='cs_footer_item'>
                <Newsletter
                  title={initSiteSettingsData?.footer?.title!}
                  subTitle={initSiteSettingsData?.footer?.sub_title!}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cs_footer_bottom cs_accent_bg'>
        <div className='container'>
          <div className='cs_footer_bottom_in'>
            <SocialWidget
              socialMedia={initSiteSettingsData?.footer?.socialLinks}
            />
            <div className='cs_copyright'>
              {initSiteSettingsData?.footer?.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
