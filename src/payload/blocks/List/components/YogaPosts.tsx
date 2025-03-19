'use client'

import { Blog } from '@payload-types'
import { useState } from 'react'

import Section from '@/components/common/Section'
import Pagination from '@/components/marketing/blog/Pagination'
import Spacing from '@/components/marketing/home/Spacing'
import YogaItem from '@/components/marketing/yoga/YogaItem'
import AllYogaPostsSkelton from '@/components/skeltons/AllYogaPostsSkelton'
import { trpc } from '@/trpc/client'

const YogaPosts = () => {
  const yogaSkeltons = 3
  const [page, setPage] = useState(1)
  const { data: yogaData, isPending: isYogaPending } =
    trpc.blog.getAllBlogsByTagWithPagination.useQuery({
      slug: 'yoga',
      page: page,
    })
  return (
    <div className='container'>
      <Section bottomMd={80}>
        <div className={`cs_team_grid cs_${'grid'}_view_wrap`}>
          {isYogaPending
            ? Array.from({ length: yogaSkeltons })?.map((_, index) => (
                <AllYogaPostsSkelton key={index} />
              ))
            : yogaData?.blogsData?.map((yoga, index) => (
                <YogaItem yoga={yoga as Blog} key={index} />
              ))}
        </div>
        <Spacing md='110' lg='70' />
        <Pagination meta={yogaData?.meta} setPage={setPage} page={page} />
      </Section>
    </div>
  )
}

export default YogaPosts
