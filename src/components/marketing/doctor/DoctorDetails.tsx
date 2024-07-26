import Spacing from '../home/Spacing'
import { Department, Doctor, Media } from '@payload-types'
import Image from 'next/image'

import Tabs from '@/components/common/Tabs'

import List from './List'
import List2 from './List/List2'

export default function DoctorDetails({
  doctorDetails,
}: {
  doctorDetails: Doctor
}) {
  const tabs = [
    {
      title: 'Education',
      content: (
        <List
          heading={'Degrees'}
          iconUrl='/images/icons/graduation.svg'
          data={doctorDetails?.qualifications}
        />
      ),
    },
    {
      title: 'Awards',
      content: (
        <List2
          heading={'Awards/Achievements'}
          iconUrl='/images/icons/award2.svg'
          data={doctorDetails?.achievements}
        />
      ),
    },
    {
      title: 'Experience',
      content: (
        <List2
          heading={'Experiences'}
          iconUrl='/images/icons/experience.svg'
          data={doctorDetails?.experience}
        />
      ),
    },
  ]
  return (
    <div className='cs_doctor_details'>
      <div
        className='cs_doctor_details_bg cs_bg_filed'
        style={{
          backgroundImage: 'url(/images/doctors/doctor_details_bg.svg)',
        }}
      />
      <Spacing md='85' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='cs_single_doctor cs_radius_20 overflow-hidden'>
              <Image
                src={(doctorDetails?.doctor_image as Media)?.url || ''}
                alt='Doctor'
                className='w-100'
                height={736}
                width={664}
              />
              <h3 className='cs_white_color cs_accent_bg cs_semibold cs_fs_24 mb-0 text-center'>
                {(doctorDetails?.department?.value as Department)?.title}
              </h3>
            </div>
            <Spacing md='94' lg='60' />
            {/* <ListStyle2
              heading={'Contact Info'}
              iconUrl='/images/icons/schedule.svg'
              phoneNumber={doctorDetails?.phone_number as number}
              email={doctorDetails?.email as string}
            />
            <Spacing md='66' lg='60' /> */}
            {/* <ListStyle3
              heading={scheduleHeading}
              iconUrl='/images/icons/schedule.svg'
              data={schedules}
            /> */}
          </div>
          <div className='col-lg-6 offset-lg-1 position-relative'>
            <Spacing md='55' />
            <h2 className='cs_fs_48 cs_semibold mb-0'>{doctorDetails?.name}</h2>
            <Spacing md='12' />
            <h3 className='cs_semibold cs_fs_24 mb-0'>
              {doctorDetails?.designation}
            </h3>
            <Spacing md='32' />
            <p className='cs_heading_color mb-0'>
              {doctorDetails?.description}
            </p>
            {/* <div className='cs_social_links cs_accent_bg cs_radius_15'>
              {social?.map((item, index) => (
                <Link href={item.href} key={index}>
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div> */}
            <Spacing md='200' xl='150' lg='150' />
            <Spacing md='35' lg='0' />
            {/* <List
              heading={'Degrees'}
              iconUrl='/images/icons/graduation.svg'
              data={doctorDetails?.qualifications}
            />
            <Spacing md='70' lg='50' />
            <List2
              heading={'Experiences'}
              iconUrl='/images/icons/experience.svg'
              data={doctorDetails?.experience}
            />
            <Spacing md='70' lg='50' />
            <List2
              heading={'Awards/Achievements'}
              iconUrl='/images/icons/award2.svg'
              data={doctorDetails?.achievements}
            /> */}
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  )
}
