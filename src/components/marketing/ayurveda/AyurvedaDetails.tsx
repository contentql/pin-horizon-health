'use client'

import Breadcrumb from '../blog/Breadcrumb'
import RichText from '../blog/RichText'
import Spacing from '../home/Spacing'
import { Ayurveda, Media } from '@payload-types'
import Image from 'next/image'

import Section from '@/components/common/Section'

import AyurvedaSidebar from './AyurvedaSideBar'

export default function AyurvedaDetails({
  ayurvedaDetails,
}: {
  ayurvedaDetails: Ayurveda
}) {
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb heading={ayurvedaDetails?.title} />
      </Section>
      <div className='container'>
        {/* <div className='cs_blog_details_info'>
          <div className='cs_blog_details_info_left'>
            <div className='cs_blog_details_tags'>
              {tags.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.tag}
                </Link>
              ))}
            </div>
            <div className='cs_blog_details_date'>
              March 12, 2023 | Debri Bianca
            </div>
          </div>
          <div className='cs_social_links_wrap'>
            <h2>Share:</h2>
            <div className='cs_social_links'>
              <Link href='/'>
                <Icon icon='fa-brands:facebook-f' />
              </Link>
              <Link href='/'>
                <Icon icon='fa-brands:linkedin-in' />
              </Link>
              <Link href='/'>
                <Icon icon='fa-brands:twitter' />
              </Link>
            </div>
          </div>
        </div> */}
        <Spacing md='55' />
        <Image
          src={(ayurvedaDetails?.image as Media)?.url || ''}
          alt='Blog Details'
          className='cs_radius_20 mx-auto aspect-video'
          // placeholder='blur'
          width={1296}
          height={606}
        />
        <Spacing md='90' lg='50' />
        <div className='row'>
          <div className='col-lg-8 '>
            <div className='cs_blog_details'>
              <RichText
                content={ayurvedaDetails?.description}
                locale={''}
                blockIndex={0}
              />
            </div>
            {/* <Spacing md='85' />
            <AuthorWidget
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
            <AyurvedaSidebar />
          </div>
        </div>
        <Spacing md='135' lg='100' />
        {/* <h2 className='cs_fs_40 cs_medium mb-0'>Related Articles</h2>
        <Spacing md='57' />
        <div className='row cs_gap_y_40'>
          {relatedBlog?.map((item, index) => (
            <div className='col-xl-4 col-md-6' key={index}>
              <Post {...item} />
            </div>
          ))}
        </div> */}
      </div>
    </>
  )
}
