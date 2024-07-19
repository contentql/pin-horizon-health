'use client'

import Spacing from '../../home/Spacing'
import Breadcrumb from '../Breadcrumb'
import Post from '../Post'
import RichText from '../RichText'
import Sidebar from '../Sidebar'
import { Icon } from '@iconify/react'
import { Blog, Media, Tag, User } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import Section from '@/components/common/Section'
import { trpc } from '@/trpc/client'

export default function BlogDetails({
  blogData,
  blogsData,
}: {
  blogData: Blog
  blogsData: Blog[]
}) {
  const { data: blogsByTag } = trpc.blog.getAllBlogsByTag.useQuery({
    slug: (blogData?.tags?.value as Tag)?.title,
  })
  const date = new Date(blogData?.createdAt)
  let formattedDate = `${date.getFullYear()}, ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb heading={blogData?.title} />
      </Section>
      <div className='container'>
        <div className='cs_blog_details_info'>
          <div className='cs_blog_details_info_left'>
            {/* <div className='cs_blog_details_tags'>
              {tags.map((item, index) => (
                <Link key={index} href={item?.href}>
                  {item?.tag}
                </Link>
              ))}
            </div> */}
            <div className='cs_blog_details_date'>
              {formattedDate} |{' '}
              {blogData?.author
                ?.slice(0, 2)
                ?.map(author => (author?.value as User)?.name)}
            </div>
          </div>
          <div className='cs_social_links_wrap'>
            {blogData?.social_media?.length! > 0 && <h2>Share:</h2>}
            <div className='cs_social_links'>
              {blogData?.social_media?.map((social_icon, index) => (
                <Link key={index} href={social_icon?.url}>
                  <Icon icon={social_icon?.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Spacing md='55' />
        <Image
          src={(blogData?.blog_image as Media)?.url || ''}
          alt={(blogData?.blog_image as Media)?.alt || 'Blog Image'}
          className='w-100 cs_radius_20 h-[606px]'
          // placeholder='blur'
          width={1296}
          height={606}
        />
        <Spacing md='90' lg='50' />
        <div className='row'>
          <div className='col-lg-8'>
            <div className='cs_blog_details'>
              <RichText
                content={blogData?.description}
                locale={''}
                blockIndex={0}
              />
            </div>
            {/* <Spacing md='85' /> */}
            {/* <AuthorWidget
              imgUrl='/images/blog/author.png'
              name='Author Bio'
              description="John Smith is a freelance writer and content strategist with a passion for helping businesses tell their stories. With over 10 years of experience in the industry, John has worked with a wide range of clients, from startups to Fortune 500 companies. He holds a Bachelor's degree in English from the University of California, Los Angeles (UCLA), and is an avid reader and traveler in his free time. Follow him on Twitter @johnsmithwriter for the latest updates on his work."
            />
            <Spacing md='110' />
            <CommentsWidget title='Comments' />
            <Spacing md='92' />
            <ReplyWidget title='Leave a Reply' /> */}
          </div>
          <div className='col-lg-4'>
            <Sidebar blogsByTag={blogsByTag as Blog[]} />
          </div>
        </div>
        <Spacing md='135' lg='100' />
        <h2 className='cs_fs_40 cs_medium mb-0'>Latest Articles</h2>
        <Spacing md='57' />
        <div className='row cs_gap_y_40'>
          {blogsData?.slice(0, 3)?.map((blogData, index) => (
            <div className='col-xl-4 col-md-6' key={index}>
              <Post blogData={blogData} />
            </div>
          ))}
        </div>
      </div>
      <Spacing md='200' xl='150' lg='110' />
      {/* <Section className='cs_footer_margin_0'>
        <BannerSectionStyle9
          title={data?.title || ''}
          subTitle={data?.sub_title || ''}
          imgUrl={(data?.image as Media)?.url || ''}
        />
      </Section> */}
    </>
  )
}
