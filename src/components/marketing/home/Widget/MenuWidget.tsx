import Link from 'next/link'

type menuDataOneType = {
  title: string
  href: string
}[]
export default function MenuWidget({ data }: { data: menuDataOneType }) {
  return (
    <ul className='cs_menu_widget cs_mp0'>
      {data?.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}
