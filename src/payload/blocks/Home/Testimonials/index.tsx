import { TestimonialsType } from '@payload-types'

import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'
import Testimonial from '@/components/marketing/home/Testimonial'

export default function Testimonials(data: TestimonialsType) {
  return (
    <>
      <Spacing md={185} lg={140} xl={100} />
      <div className='container'>
        <SectionHeading
          title={data?.title}
          titleDown={data?.sub_title}
          center
        />
        <Spacing md='72' lg='50' />
        <Testimonial testimonials={data?.testimonials} />
      </div>
      <Spacing md={200} lg={150} xl={100} />
    </>
  )
}
