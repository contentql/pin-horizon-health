'use client'

import Pagination from '../Pagination'
import Post from '../Post'
import { Blog } from '@payload-types'
import { useState } from 'react'

import Spacing from '@/components/marketing/home/Spacing'
import AllBlogsSkelton from '@/components/skeltons/AllBlogsSkelton'
import { trpc } from '@/trpc/client'

export default function BlogSectionStyle2() {
  const [page, setPage] = useState(1)
  const { data: blogsData, isPending: isBlogsPending } =
    trpc.blog.getAllBlogs.useQuery({ page: page })

  return (
    <div className='container'>
      <div className='row cs_row_gap_50'>
        {isBlogsPending ? (
          <AllBlogsSkelton />
        ) : (
          blogsData?.docs?.map((blogData, index) => (
            <div className='col-xl-4 col-md-6' key={index}>
              <Post blogData={blogData as Blog} />
            </div>
          ))
        )}
      </div>
      <Spacing md='110' lg='70' />
      <Pagination meta={blogsData?.meta} setPage={setPage} page={page} />
    </div>
  )
}
