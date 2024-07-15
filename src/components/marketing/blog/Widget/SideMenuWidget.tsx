import Link from 'next/link'

export default function SideMenuWidget({
  title,
  data,
}: {
  title: string
  data: {
    title: string
    url: string
  }[]
}) {
  return (
    <>
      <h2 className='cs_sidebar_widget_title'>{title}</h2>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}