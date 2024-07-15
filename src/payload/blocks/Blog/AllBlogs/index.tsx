import { AllBlogsType, Blog, Media } from '@payload-types'

import Section from '@/components/common/Section'
import BannerSectionStyle9 from '@/components/marketing/blog/BannerSection/BannerSectionStyle9'
import BlogSectionStyle2 from '@/components/marketing/blog/BlogSection/BlogSectionStyle2'
import Breadcrumb from '@/components/marketing/blog/Breadcrumb'
import { trpc } from '@/trpc/client'

export default function AllBlogs(data: AllBlogsType) {
  const { data: blogsData } = trpc.blog.getAllBlogs.useQuery()

  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb heading={data?.heading || ''} />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 blogsData={blogsData as Blog[]} />
      </Section>
      <Section className='cs_footer_margin_0'>
        <BannerSectionStyle9
          title={data?.title || ''}
          subTitle={data?.sub_title || ''}
          imgUrl={(data?.image as Media)?.url || ''}
        />
      </Section>
    </>
  )
}
