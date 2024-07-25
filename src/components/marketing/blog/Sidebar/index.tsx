import NewsletterStyle4 from '../Widget/NewsletterStyle4'
import NewsletterStyle5 from '../Widget/NewsletterStyle5'
import RecentPostWidget from '../Widget/RecentPostWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import { Blog, Tag } from '@payload-types'

import { trpc } from '@/trpc/client'

export default function Sidebar({
  blogsByTag,
  tag,
}: {
  blogsByTag: Blog[]
  tag: Tag
}) {
  const { data: latestBlogs } =
    trpc.blog.getAllBlogsWithoutPagination.useQuery()
  return (
    <div className='cs_sidebar'>
      {tag?.title !== 'Yoga' && tag?.title !== 'Ayurveda' && (
        <div className='cs_sidebar_item widget_categories'>
          <SideMenuWidget title='Latest Blogs' data={latestBlogs as Blog[]} />
        </div>
      )}
      {blogsByTag?.length > 0 && (
        <div className='cs_sidebar_item'>
          <RecentPostWidget title='Related Articles' data={blogsByTag} />
        </div>
      )}
      {(tag?.title == 'Yoga' || tag?.title == 'Ayurveda') && (
        <div className='cs_sidebar_item widget_categories'>
          {tag?.title === 'Yoga' ? (
            <NewsletterStyle4 tag={tag} />
          ) : tag?.title === 'Ayurveda' ? (
            <NewsletterStyle5 tag={tag} />
          ) : null}
        </div>
      )}
    </div>
  )
}
