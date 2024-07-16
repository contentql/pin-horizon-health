import { Doctor, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function YogaItem({ doctor }: { doctor: Doctor }) {
  return (
    <div className='cs_team cs_style_1 cs_type_2 cs_radius_20 overflow-hidden text-center'>
      <div className='cs_member_img'>
        <Link href={`/doctor/${doctor?.slug!}`} className='d-block'>
          <Image
            src={(doctor?.doctor_image as Media)?.url || ''}
            alt='Doctor'
            height={487}
            width={487}
          />
        </Link>
        <div className='cs_label cs_white_color cs_accent_bg'>
          {/* {(doctor?.department as Department)?.title} */}
        </div>
      </div>
      <div className='cs_team_meta cs_white_bg'>
        <div>
          <h3 className='cs_member_name cs_fs_32'>
            <Link href={`/doctor/${doctor?.slug!}`}>{doctor?.name}</Link>
          </h3>
          <p className='cs_member_designation cs_heading_color cs_medium'>
            {doctor?.designation}
          </p>
          <p className='cs_member_description'>{doctor?.description}</p>
        </div>
        <div>
          {/* <div className='cs_social_links'>
            {social?.map((item, index) => (
              <Link href={item.href} key={index}>
                <Icon icon={item.icon} />
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
