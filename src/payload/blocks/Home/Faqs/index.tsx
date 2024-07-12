import { FaqsType } from '@payload-types'

import Accordion from '@/components/marketing/home/Accordion'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function Faqs(data: FaqsType) {
  return (
    <>
      <Spacing md={190} lg={145} xl={105} />
      <div className='container'>
        <SectionHeading
          title={data?.sub_title}
          titleUp={data?.sub_title}
          center
        />
        <Spacing md='72' lg='50' />
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            <Accordion variant='cs_style1' faqs={data?.faqs} />
          </div>
        </div>
      </div>
    </>
  )
}
