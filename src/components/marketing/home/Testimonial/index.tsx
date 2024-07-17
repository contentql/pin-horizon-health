'use client'

import Rating from '../Rating'
import { Media, TestimonialsType } from '@payload-types'
import Image from 'next/image'
import { useState } from 'react'

export default function Testimonial({
  testimonials,
}: {
  testimonials: TestimonialsType['testimonials']
}) {
  const [activeTab, setActiveTab] = useState(2)
  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber)
  }
  return (
    <div className='cs_tabs cs_style1'>
      <ul className='cs_tab_links'>
        {testimonials?.map((testimonial, index) => (
          <li key={index} className={activeTab === index + 1 ? 'active' : ''}>
            <div
              className='cs_tab_link_in'
              onClick={() => handleTabClick(index + 1)}>
              <div className='cs_testimonial_1_avatar'>
                <Image
                  src={(testimonial?.image as Media)?.url || ''}
                  alt={(testimonial?.image as Media)?.alt || 'Avatar'}
                  height={125}
                  width={125}
                />
                <div className='cs_testimonial_1_avatar_right'>
                  <h3 className='cs_fs_24 cs_semibold mb-0'>
                    {testimonial?.title}
                  </h3>
                  <p className='cs_heading_color mb-0'>
                    {testimonial?.sub_title}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='cs_tab_body'>
        {testimonials?.map((testimonial, index) => {
          return (
            activeTab === index + 1 && (
              <div key={index} className='cs_testimonial cs_style_1'>
                <Image
                  src='/images/icons/quote.svg'
                  alt='Icon'
                  height={38}
                  width={50}
                />
                <p>{testimonial.review}</p>
                <Rating ratingNumber={testimonial.rating!} />
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
