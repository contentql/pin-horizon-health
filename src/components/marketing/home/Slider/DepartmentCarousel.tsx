'use client'

import { DepartmentType } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'

const departmentData = {
  '1': '/images/home_1/department_icon_1.svg',
  '2': '/images/home_1/department_icon_2.svg',
  '3': '/images/home_1/department_icon_3.svg',
  '4': '/images/home_1/department_icon_4.svg',
  '5': '/images/home_1/department_icon_5.svg',
  '6': '/images/home_1/department_icon_6.svg',
}

export default function DepartmentCarousel({
  departments,
}: {
  departments: DepartmentType['departments']
}) {
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <div
      {...props}
      className={
        'cs_slider_prev cs_center' +
        (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden='true'
      aria-disabled={currentSlide === 0 ? true : false}>
      <Image
        src='/images/icons/left_arrow_blue.svg'
        alt='Icon'
        height={24}
        width={35}
      />
    </div>
  )
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <div
      {...props}
      className={
        'cs_slider_next cs_center' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden='true'
      aria-disabled={currentSlide === slideCount - 1 ? true : false}>
      <Image
        src='/images/icons/right_arrow_blue.svg'
        alt='Icon'
        height={24}
        width={35}
      />
    </div>
  )
  const settings = {
    dots: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <Slider
        {...settings}
        className='cs_gap_20 cs_cs_slider_navigation_1 cs_department_carousel'>
        {departments?.map((department, index) => (
          <div key={index}>
            <Link
              href={department?.url_path || '/'}
              className='cs_department cs_shadow_1 cs_radius_20 cs_white_bg'>
              <>
                <Image
                  src={departmentData[department?.department_icon!]}
                  alt='Icon'
                  height={75}
                  width={75}
                />
                <p className='cs_department_title cs_medium cs_heading_color cs_fs_20 mb-0'>
                  {department?.title}
                </p>
              </>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  )
}
