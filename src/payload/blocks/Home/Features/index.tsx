import { FeaturesType } from '@payload-types'

import Feature from '@/components/marketing/home/Feature'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function Features(data: FeaturesType) {
  return (
    <div className='cs_shape_wrap'>
      <div className='cs_shape_1' />
      <div className='container'>
        <SectionHeading title={data?.title} center />
        <Spacing md='72' lg='50' />
        <div className='cs_random_features'>
          {data?.features?.map((feature, index) => (
            <div className='cs_random_features_col' key={index}>
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
