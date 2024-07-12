import { AboutAwardsType } from '@payload-types'

import IconBoxStyle5 from '@/components/marketing/about/IconBox/IconBoxStyle5'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function AboutAwards(data: AboutAwardsType) {
  return (
    <>
      <Spacing md={190} lg={145} xl={105} />
      <div className='container'>
        <SectionHeading
          title={data?.sub_title}
          titleUp={data?.title}
          subTitle={data?.description}
          center
        />
        <Spacing md='72' lg='50' />
        <div className='row cs_gap_y_24'>
          {data?.awards?.map((award, index) => (
            <div className='col-xxl-3 col-md-6' key={index}>
              <IconBoxStyle5 award={award} />
            </div>
          ))}
        </div>
      </div>
      <Spacing md={200} lg={150} xl={110} />
    </>
  )
}
