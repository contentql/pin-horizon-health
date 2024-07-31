'use client'

import { Blog, Media, YogaPostsType } from '@payload-types'
import { useState } from 'react'

import Section from '@/components/common/Section'
import Pagination from '@/components/marketing/blog/Pagination'
import Spacing from '@/components/marketing/home/Spacing'
import YogaHero from '@/components/marketing/yoga/YogaHero'
import YogaItem from '@/components/marketing/yoga/YogaItem'
import AllYogaPostsSkelton from '@/components/skeltons/AllYogaPostsSkelton'
import { trpc } from '@/trpc/client'

function YogaPosts(data: YogaPostsType) {
  const yogaSkeltons = 3
  const [page, setPage] = useState(1)
  const { data: yogaData, isPending: isYogaPending } =
    trpc.blog.getAllBlogsByTagWithPagination.useQuery({
      slug: 'yoga',
      page: page,
    })
  return (
    <>
      <YogaHero
        bgUrl='/images/doctors/banner_bg.svg'
        imgUrl={(data?.image as Media)?.url || ''}
        title={data?.title}
        subTitle={data?.sub_title}
      />
      <div className='container'>
        <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
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
    </>
  )
}

export default YogaPosts
