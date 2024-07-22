'use client'

import Image from 'next/image'

import ContactInfoWidget from '@/components/marketing/home/Widget/ContactInfoWidget'
import MenuWidget from '@/components/marketing/home/Widget/MenuWidget'
import Newsletter from '@/components/marketing/home/Widget/Newsletter'
import SocialWidget from '@/components/marketing/home/Widget/SocialWidget'
import TextWidget from '@/components/marketing/home/Widget/TextWidget'

const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Doctors', href: '/doctors' },
  { title: 'Timetable', href: '/timetable' },
  { title: 'Appointment', href: '/appointments' },
  { title: 'Testimonials', href: '/' },
]
const menuDataTwo = [
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'FAQs', href: '/' },
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/' },
]

export default function Footer() {
  return (
    <footer className='cs_footer cs_style_1 cs_heading_color'>
      <div
        className='cs_footer_logo_wrap'
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}>
        <div
          className='cs_footer_brand'
          style={{ backgroundImage: 'url(/images/footer_logo_bg.svg)' }}>
          <Image
            src='/images/logo_icon.svg'
            alt='Logo Icon'
            className='cs_footer_brand_icon'
            height={0}
            width={0}
          />
          <h2 className='cs_footer_brand_text'>Horizon Health</h2>
        </div>
      </div>
      <div className='cs_footer_main'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='cs_footer_item'>
                <TextWidget text='Horizon Health & <br />Healthcare Center' />
                <ContactInfoWidget />
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='cs_footer_item'>
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='cs_footer_item'>
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='cs_footer_item'>
                <Newsletter
                  title='Be Our Subscribers'
                  subTitle='To get the latest news about health from our experts'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cs_footer_bottom cs_accent_bg'>
        <div className='container'>
          <div className='cs_footer_bottom_in'>
            <SocialWidget />
            <div className='cs_copyright'>
              Copyright © 2024 Horizon Health. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
