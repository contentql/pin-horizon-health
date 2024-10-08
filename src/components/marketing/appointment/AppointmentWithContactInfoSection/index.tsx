import { AppointmentContactType } from '@payload-types'

// import CalComponent from '@/components/common/CalComponent'

export default function AppointmentWithContactInfoSection({
  contactInfo,
}: {
  contactInfo: AppointmentContactType
}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='cs_fs_40 cs_medium mb-0'>Book An Appoinment</h2>
          <div className='cs_height_42 cs_height_xl_25' />
          {/* <CalComponent url='team/medical-horizon' /> */}
        </div>
        {/* <div className='col-lg-3 offset-lg-1'>
          <div className='cs_height_lg_100' />
          <h2 className='cs_fs_40 cs_medium mb-0'>{contactInfo?.title}</h2>
          <div className='cs_height_60 cs_height_xl_40' />
          <Image
            src={
              (contactInfo?.image as Media)?.sizes?.appointment_contact_image
                ?.url as string
            }
            alt='Appointment'
            height={327}
            width={547}
            className='cs_radius_25 w-100'
          />
          <div className='cs_height_xl_60 mt-4' />
          <ul className='cs_contact_info cs_style_1 cs_mp0'>
            <li>
              <h3 className='cs_fs_24 cs_semibold mb-0'>Phone</h3>
              <p className='cs_heading_color mb-0'>
                {contactInfo?.phoneNumber}
              </p>
            </li>

            <li>
              <h3 className='cs_fs_24 cs_semibold mb-0'>E-Mail us</h3>
              <p className='cs_heading_color mb-0'>{contactInfo?.email}</p>
            </li>

            <li>
              <h3 className='cs_fs_24 cs_semibold mb-0'>Location</h3>
              <p className='cs_heading_color mb-0'>{contactInfo?.location}</p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}
