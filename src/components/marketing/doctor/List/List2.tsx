import { Doctor } from '@payload-types'
import Image from 'next/image'

export default function List2({
  heading,
  iconUrl,
  data,
}: {
  heading: string
  iconUrl: string
  data: Doctor['achievements' | 'experience']
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
            {item.title && (
              <p className='cs_medium cs_heading_color mb-0'>{item.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
