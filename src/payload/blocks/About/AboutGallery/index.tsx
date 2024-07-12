import { AboutGalleryType } from '@payload-types'

import Portfolio from '@/components/marketing/about/Portfolio'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function AboutGallery(data: AboutGalleryType) {
  return (
    <>
      <Spacing md={170} lg={120} xl={80} />
      <div className='container'>
        <div className='cs_gallery_grid_1'>
          <div className='cs_grid_item'>
            <SectionHeading title={data?.sub_title} titleUp={data?.title} />
            <Spacing md='52' xl='52' lg='25' />
          </div>
          <div className='cs_grid_item'></div>
          {data?.gallery?.map((item, index) => (
            <div className='cs_grid_item' key={index}>
              <Portfolio item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
