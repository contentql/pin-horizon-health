import Pagination from '../Pagination'
import Post from '../Post'
import { Blog } from '@payload-types'

import Spacing from '@/components/marketing/home/Spacing'

export default function BlogSectionStyle2({
  blogsData,
}: {
  blogsData: Blog[]
}) {
  return (
    <div className='container'>
      <div className='row cs_row_gap_50'>
        {blogsData?.map((blogData, index) => (
          <div className='col-xl-4 col-md-6' key={index}>
            <Post blogData={blogData} />
          </div>
        ))}
      </div>
      <Spacing md='110' lg='70' />
      <Pagination />
    </div>
  )
}