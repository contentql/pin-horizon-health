import SectionHeading from '../home/SectionHeading'
import Spacing from '../home/Spacing'

import CalComponent from '@/components/common/CalComponent'

export default function Appointment({
  bgUrl,
  imgUrl,
  sectionTitle,
  sectionTitleUp,
  doctorId,
}: {
  bgUrl: string
  imgUrl: any
  sectionTitle: string
  sectionTitleUp: string
  doctorId?: string
}) {
  return (
    <section
      className='cs_appointment_section_1 cs_bg_filed'
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}>
      <div className='container'>
        {/* <div className='cs_height_132' />
        <div className='cs_appointment_img'>
          <Image src={imgUrl} alt='Appointment' placeholder='blur' />
        </div> */}
        <div className='cs_height_120' />
        <div className='row'>
          <div className='col-lg-12 '>
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
            <Spacing md='57' />
            <CalComponent url='akhil' />
          </div>
        </div>
        <div className='cs_height_120' />
      </div>
    </section>
  )
}
