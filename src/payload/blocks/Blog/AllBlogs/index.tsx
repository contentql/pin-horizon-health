import { AllBlogsType } from '@payload-types'

import Section from '@/components/common/Section'
import BlogSectionStyle2 from '@/components/marketing/blog/BlogSection/BlogSectionStyle2'
import Breadcrumb from '@/components/marketing/blog/Breadcrumb'

export default function AllBlogs(data: AllBlogsType) {
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb heading={data?.title || ''} />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 />
      </Section>
    </>
  )
}
