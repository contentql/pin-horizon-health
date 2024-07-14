import { Icon } from '@iconify/react'
import { Blog, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Post({ blogData }: { blogData: Blog }) {
  const date = new Date(blogData?.createdAt)
  let formattedDate = `${date.getFullYear()}, ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`
  return (
    <div className={`cs_post cs_style_1`}>
      <Link
        href={`/blog/${blogData?.title}`}
        className='cs_post_thumb cs_view_mouse'>
        <Image
          src={(blogData?.blog_image as Media)?.url || ''}
          alt={(blogData?.blog_image as Media)?.alt || ''}
          height={379}
          width={526}
        />
      </Link>
      <div className='cs_post_info'>
        <div>
          <div className='cs_post_meta'>
            <div className='cs_posted_by'>{formattedDate}</div>
            {/* {socialShare && ( */}
            {blogData?.social_media && (
              <div className='cs_post_social'>
                {blogData?.social_media?.map((social_icon, index) => (
                  <Link
                    key={index}
                    href={social_icon?.url}
                    className='cs_center rounded-circle'>
                    <Icon icon={social_icon?.icon} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <h2 className='cs_post_title cs_semibold cs_fs_32'>
            <Link href={`/blog/${blogData?.title}`}>{blogData?.title}</Link>
          </h2>
        </div>
        {/* {btnText && ( */}
        {true && (
          <div className='cs_heading_color cs_medium'>
            <Link href={`/blog/${blogData?.title}`} className='cs_post_btn'>
              Learn more
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
