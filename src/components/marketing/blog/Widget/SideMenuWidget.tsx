'use client'

import { Blog } from '@payload-types'
import Link from 'next/link'

import getSlugs from '@/utils/getSlugs'
import { useMetadata } from '@/utils/metadataContext'

export default function SideMenuWidget({
  title,
  data,
}: {
  title: string
  data: Blog[]
}) {
  const { redirectionLinks } = useMetadata()
  return (
    <>
      <h2 className='cs_sidebar_widget_title'>{title}</h2>
      <ul>
        {data?.slice(0, 5)?.map((item, index) => (
          <li key={index}>
            <Link href={`${getSlugs({ redirectionLinks })?.blog}${item?.slug}`}>
              <span className='line-clamp-2'>{item?.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
