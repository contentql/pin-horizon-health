import { AboutFeaturesType, Media } from '@payload-types'
import Image from 'next/image'

import IconBoxStyle6 from '@/components/marketing/about/IconBox/IconBoxStyle6'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function AboutFeatures(data: AboutFeaturesType) {
  return (
    <div className='cs_shape_wrap'>
      <div className='cs_shape_1 cs_position_1' />
      <div className='container'>
        <div className='row flex-xl-row flex-column-reverse'>
          <div className='col-xl-5'>
            <div className='cs_pr_95 cs_img_filed text-center'>
              <Image
                src={(data?.image as Media)?.url || ''}
                alt={(data?.image as Media)?.alt || 'image'}
                className='cs_radius_30'
                //   placeholder='blur'
                width={481}
                height={704}
              />
            </div>
          </div>
          <div className='col-xl-7'>
            <SectionHeading title={data?.title} />
            <Spacing md='85' lg='70' xl='50' />
            <div className='row'>
              {data?.features?.map((feature, index) => (
                <div className='col-md-6' key={index}>
                  <IconBoxStyle6 feature={feature} />
                  <Spacing md='85' lg='60' xl='35' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
