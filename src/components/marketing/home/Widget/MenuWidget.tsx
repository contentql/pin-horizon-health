import { Page, SiteSetting } from '@payload-types'
import Link from 'next/link'

type menuDataOneType = {
  title: string
  href: string
}[]
export default function MenuWidget({
  data,
}: {
  data: Required<SiteSetting>['footer']['menuItems']
}) {
  return (
    <ul className='cs_menu_widget cs_mp0'>
      {data?.map((item, index) => (
        <li key={index}>
          <Link href={(item?.page?.value as Page)?.path || ''}>
            {(item?.page?.value as Page)?.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
