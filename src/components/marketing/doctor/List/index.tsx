import { Doctor } from '@payload-types'
import Image from 'next/image'

import { formatDate } from '@/utils/dateFormatter'

export default function List({
  heading,
  iconUrl,
  data,
}: {
  heading: string
  iconUrl: string
  data: Doctor['qualifications']
}) {
  return (
    <div className='cs_list cs_style_1'>
      <h2 className='cs_list_title cs_medium cs_fs_24'>
        <Image src={iconUrl} alt='Icon' height={24} width={30} />
        {heading}
      </h2>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <p className='cs_medium cs_heading_color mb-0'>
              {item.institute} {item?.year && <span>,</span>}{' '}
              {item?.year && formatDate(item?.year!)}
            </p>

            <p className='mb-0'>
              {item.qualification}, {item.specialization}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
