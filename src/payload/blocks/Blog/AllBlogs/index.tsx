import { BlogsType, Media } from '@payload-types'

import BannerSectionStyle9 from '@/components/common/BannerSection/BannerSectionStyle9'
import BlogSectionStyle2 from '@/components/common/BlogSection/BlogSectionStyle2'
import Breadcrumb from '@/components/common/Breadcrumb'
import Section from '@/components/common/Section'
import { trpc } from '@/trpc/client'

export default function AllBlogs(data: BlogsType) {
  const { data: blogsData } = trpc.blog.getAllBlogs.useQuery()

  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb heading={data?.heading!} />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 blogsData={blogsData} />
      </Section>
      {/* <Section className='cs_footer_margin_0'> */}
      <Section>
        <BannerSectionStyle9
          title={data?.title!}
          subTitle={data?.sub_title!}
          imgUrl={(data?.image as Media)?.url || ''}
        />
      </Section>
    </>
  )
}
