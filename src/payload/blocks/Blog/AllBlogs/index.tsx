import { AllBlogsType } from '@payload-types'

import BlogSectionStyle2 from '@/components/marketing/blog/BlogSection/BlogSectionStyle2'
import Breadcrumb from '@/components/marketing/blog/Breadcrumb'

export default function AllBlogs(data: AllBlogsType) {
  return (
    <>
      <Breadcrumb heading={data?.title || ''} />
      <BlogSectionStyle2 />
    </>
  )
}
