import { AwardType } from '@payload-types'

import IconBoxStyle1 from '@/components/marketing/home/IconBox/IconBoxStyle1'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function Award(data: AwardType) {
  return (
    <>
      <Spacing md={185} lg={140} xl={100} />
      <div className='container'>
        <SectionHeading title={data?.title} />
        <Spacing md='72' lg='50' />
        <div className='row gy-4'>
          {data?.awards?.map(({ award, index }: any) => (
            <div className='col-xxl-3 col-md-6' key={index}>
              <IconBoxStyle1 {...award} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
