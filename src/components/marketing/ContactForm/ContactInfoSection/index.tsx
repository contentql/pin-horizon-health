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
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd'
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  )
}
