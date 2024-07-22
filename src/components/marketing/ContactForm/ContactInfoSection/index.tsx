import Spacing from '../../appointment/BannerSection/spacing'
import IconBoxStyle11 from '../../home/IconBox/IconBoxStyle11'
import { ContactDetailsType } from '@payload-types'

const infoList = {
  '1': '/images/contact/icon_1.svg',
  '2': '/images/contact/icon_2.svg',
  '3': '/images/contact/icon_3.svg',
}

export default function ContactInfoSection({
  contactDetails,
}: {
  contactDetails: ContactDetailsType
}) {
  return (
    <div className='container'>
      <h2 className='cs_fs_72 mb-0'>{contactDetails?.title}</h2>
      <Spacing md='70' lg='50' />
      <div className='row g-4 g-xl-3 g-xxl-5'>
        {contactDetails?.contact_info?.map((contact, index) => (
          <div key={index} className='col-xl-4'>
            <IconBoxStyle11
              title={contact?.title || ''}
              subTitle={contact?.sub_title || ''}
              iconSrc={infoList[contact?.contact_icon!]}
            />
          </div>
        ))}
      </div>
      <Spacing md='35' />
      {/* Start Google Map */}
      <div className='cs_map'>
        <iframe
          id='map'
          title='Google Map'
          src={`https://maps.google.com/maps?q=${contactDetails?.location}&t=m&z=14&output=embed&iwloc=near`}
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  )
}
