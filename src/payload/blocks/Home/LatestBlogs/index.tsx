import { Blog, LatestBlogsType } from '@payload-types'

import Section from '@/components/common/Section'
import Post from '@/components/marketing/blog/Post'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'
import { trpc } from '@/trpc/client'

export default function LatestBlogs(data: LatestBlogsType) {
  const { data: blogsData } = trpc.blog.getAllBlogs.useQuery()
  return (
    <Section topMd={190} topLg={145} topXl={105}>
      <div className='container'>
        <SectionHeading title={data?.sub_title} titleUp={data?.title} center />
        <Spacing md='72' lg='50' />
        <div className='row gy-4'>
          {blogsData?.slice(0, 3)?.map((blogData, index) => (
            <div className='col-lg-4' key={index}>
              <Post blogData={blogData as Blog} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
