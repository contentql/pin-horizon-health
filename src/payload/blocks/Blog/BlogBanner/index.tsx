import { BlogBannerType, Media } from '@payload-types'

import Section from '@/components/common/Section'
import BannerSectionStyle9 from '@/components/marketing/blog/BannerSection/BannerSectionStyle9'

const BlogBanner = (data: BlogBannerType) => {
  return (
    <Section className='cs_footer_margin_0'>
      <BannerSectionStyle9
        title={data?.title || ''}
        subTitle={data?.sub_title || ''}
        imgUrl={(data?.image as Media)?.url || ''}
      />
    </Section>
  )
}

export default BlogBanner
