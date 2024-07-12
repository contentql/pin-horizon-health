'use client'

import { BlogsType, Media } from '@payload-types'

import BannerSectionStyle9 from '@/components/common/BannerSection/BannerSectionStyle9'
import BlogSectionStyle2 from '@/components/common/BlogSection/BlogSectionStyle2'
import Breadcrumb from '@/components/common/Breadcrumb'
import Section from '@/components/common/Section'

const blogData = [
  {
    title:
      'The Importance of Mental Health: Understanding and Managing Anxiety Disorders',
    thumbUrl: '/images/blog/post_1.jpeg',
    date: 'March 12',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: `A Parent's Guide to Childhood Vaccinations: What You Need to Know`,
    thumbUrl: '/images/blog/post_2.jpeg',
    date: 'March 11',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle',
    thumbUrl: '/images/blog/post_3.jpeg',
    date: 'March 9',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Managing Chronic Pain: Treatment Options and Strategies',
    thumbUrl: '/images/blog/post_4.jpeg',
    date: 'March 8',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Understanding and Managing Diabetes: Tips for Healthy Living',
    thumbUrl: '/images/blog/post_5.jpeg',
    date: 'March 5',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Role of Physical Therapy in Injury Recovery and Prevention',
    thumbUrl: '/images/blog/post_6.jpeg',
    date: 'March 2',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Breaking the Stigma: Raising Awareness for Mental Health Issues',
    thumbUrl: '/images/blog/post_7.jpeg',
    date: 'Feb 28',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Allergies and Asthma: Causes, Symptoms, and Treatment Options',
    thumbUrl: '/images/blog/post_8.jpeg',
    date: 'Feb 26',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Caring for Your Skin: Tips for Healthy, Glowing Skin',
    thumbUrl: '/images/blog/post_9.jpeg',
    date: 'Feb 25',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
]

export default function Blogs(data: BlogsType) {
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb heading={data?.heading!} />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={blogData} />
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
