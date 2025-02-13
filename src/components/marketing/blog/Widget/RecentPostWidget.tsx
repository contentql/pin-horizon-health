'use client'

import { Icon } from '@iconify/react'
import { Blog, Doctor } from '@payload-types'
import Link from 'next/link'

import getSlugs from '@/utils/getSlugs'
import { useMetadata } from '@/utils/metadataContext'

export default function RecentPostWidget({
  title,
  data,
}: {
  title: string
  data: Blog[]
}) {
  function formatDate(randomDate: string) {
    const date = new Date(randomDate)
    let formattedDate = `${date.getFullYear()}, ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`
    return formattedDate
  }
  const { redirectionLinks } = useMetadata()
  return (
    <>
      <h2 className='cs_sidebar_widget_title'>{title}</h2>
      <ul className='cs_popular_posts'>
        {data?.slice(0, 5)?.map((item, index) => (
          <li key={index}>
            <div className='cs_popular_post'>
              <h2 className='cs_popular_post_title'>
                <Link
                  href={`${getSlugs({ redirectionLinks })?.blog}${item?.slug}`}>
                  {item?.title}
                </Link>
              </h2>
              <ul className='cs_popular_post_meta'>
                <li className='cs_posted_author'>
                  <Icon icon='fa6-solid:circle-user' />
                  <Link href='/'>
                    {item?.author
                      ?.slice(0, 1)
                      ?.map(author => (author?.value as Doctor)?.name)}
                  </Link>
                </li>
                <li className='cs_posted_by'>
                  <Icon icon='fa6-solid:clock' />
                  {formatDate(item?.createdAt)}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
