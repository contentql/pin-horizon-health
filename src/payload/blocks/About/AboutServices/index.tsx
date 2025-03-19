import { AboutServicesType } from '@payload-types'

import IconBoxStyle4 from '@/components/marketing/about/IconBox/IconBoxStyle4'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function AboutServices(data: AboutServicesType) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-xl-4'>
          <SectionHeading title={data?.sub_title} titleUp={data?.title} />
          <Spacing md='72' lg='50' />
        </div>
        {data?.services?.map((service, index) => (
          <div className='col-md-6 col-xl-4' key={index}>
            <IconBoxStyle4 service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}
