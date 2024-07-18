import { Yoga } from '@payload-types'
import Link from 'next/link'

export default function YogaSideMenuWidget({
  title,
  data,
}: {
  title: string
  data: Yoga[]
}) {
  return (
    <>
      <h2 className='cs_sidebar_widget_title'>{title}</h2>
      <ul>
        {data?.slice(0, 10)?.map((yoga, index) => (
          <li key={index}>
            <Link href={`/yoga/${yoga?.slug}`}>{yoga?.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
