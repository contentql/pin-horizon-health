import { Ayurveda } from '@payload-types'
import Link from 'next/link'

export default function AyurvedaSideMenuWidget({
  title,
  data,
}: {
  title: string
  data: Ayurveda[]
}) {
  return (
    <>
      <h2 className='cs_sidebar_widget_title'>{title}</h2>
      <ul>
        {data?.slice(0, 10)?.map((ayurveda, index) => (
          <li key={index}>
            <Link href={`/ayurveda/${ayurveda?.slug}`}>{ayurveda?.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
