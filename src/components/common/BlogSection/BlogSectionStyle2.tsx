import Pagination from '../Pagination'
import Post from '../Post'

import Spacing from '@/components/marketing/home/Spacing'

export default function BlogSectionStyle2({ data }: { data: any }) {
  return (
    <div className='container'>
      <div className='row cs_row_gap_50'>
        {data?.map(({ item, index }: any) => (
          <div className='col-xl-4 col-md-6' key={index}>
            <Post {...item} />
          </div>
        ))}
      </div>
      <Spacing md='110' lg='70' />
      <Pagination />
    </div>
  )
}
