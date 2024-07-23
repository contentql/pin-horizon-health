import Pagination from '../Pagination'
import Post from '../Post'
import { Blog } from '@payload-types'

import Spacing from '@/components/marketing/home/Spacing'
import AllBlogsSkelton from '@/components/skeltons/AllBlogsSkelton'
import { trpc } from '@/trpc/client'

export default function BlogSectionStyle2() {
  const { data: blogsData, isPending: isBlogsPending } =
    trpc.blog.getAllBlogs.useQuery()

  return (
    <div className='container'>
      <div className='row cs_row_gap_50'>
        {true ? (
          <AllBlogsSkelton />
        ) : (
          blogsData?.map((blogData, index) => (
            <div className='col-xl-4 col-md-6' key={index}>
              <Post blogData={blogData as Blog} />
            </div>
          ))
        )}
      </div>
      <Spacing md='110' lg='70' />
      <Pagination />
    </div>
  )
}
