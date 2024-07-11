'use client'

import { DepartmentType } from '@payload-types'

import SectionHeading from '@/components/marketing/home/SectionHeading'
import DepartmentCarousel from '@/components/marketing/home/Slider/DepartmentCarousel'
import Spacing from '@/components/marketing/home/Spacing'

export default function Department(data: DepartmentType) {
  return (
    <>
      <Spacing md={185} lg={150} xl={110} />
      <div className='container'>
        <div className='cs_departments cs_style_1'>
          <div
            className='cs_departments_bg cs_radius_25'
            style={{
              backgroundImage: `url(/images/home_1/department_bg.svg)`,
            }}
          />
          <SectionHeading title={data?.title} center />
          <Spacing md='72' lg='50' />
          <div className='cs_department_list'>
            <DepartmentCarousel departments={data?.departments} />
          </div>
        </div>
      </div>
    </>
  )
}
