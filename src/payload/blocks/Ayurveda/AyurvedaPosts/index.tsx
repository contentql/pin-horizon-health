'use client'

import { AyurvedaPostsType, Blog } from '@payload-types'
import { useState } from 'react'

import Section from '@/components/common/Section'
import AyurvedaItem from '@/components/marketing/ayurveda/AyurvedaItem'
import Pagination from '@/components/marketing/blog/Pagination'
import Spacing from '@/components/marketing/home/Spacing'
import { trpc } from '@/trpc/client'

const AyurvedaPosts = (data: AyurvedaPostsType) => {
  const [page, setPage] = useState(1)
  const { data: ayurvedaData } = trpc.blog.getAllBlogsByTag.useQuery({
    slug: 'ayurveda',
    page: page,
  })
  return (
    <div className='flex items-center justify-center'>
      <div className='w-96 px-4 pt-9 2xl:container sm:w-auto md:px-6 md:pt-12 lg:px-20 lg:pt-16 2xl:mx-auto'>
        <div role='main' className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-semibold leading-9'>
            {data?.title}
          </h1>
          <p className='mt-4 w-11/12 text-center text-base leading-normal md:w-10/12 lg:w-1/2'>
            {data?.sub_title}
          </p>
        </div>
        <div className='container'>
          <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
            <div className={`cs_team_grid cs_${'grid'}_view_wrap`}>
              {ayurvedaData?.blogsData?.map((ayurveda, index) => (
                <AyurvedaItem ayurveda={ayurveda as Blog} key={index} />
              ))}
            </div>
            <Spacing md='110' lg='70' />
            <Pagination
              meta={ayurvedaData?.meta}
              setPage={setPage}
              page={page}
            />
          </Section>
        </div>
      </div>
    </div>
  )
}

export default AyurvedaPosts
