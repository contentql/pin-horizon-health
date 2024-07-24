import NewsletterStyle5 from '../Widget/NewsletterStyle5'
import RecentPostWidget from '../Widget/RecentPostWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import { Blog } from '@payload-types'

import { trpc } from '@/trpc/client'

export default function Sidebar({ blogsByTag }: { blogsByTag: Blog[] }) {
  const { data: latestBlogs } =
    trpc.blog.getAllBlogsWithoutPagination.useQuery()
  return (
    <div className='cs_sidebar'>
      <div className='cs_sidebar_item widget_categories'>
        <SideMenuWidget title='Latest Blogs' data={latestBlogs as Blog[]} />
      </div>
      {blogsByTag?.length > 0 && (
        <div className='cs_sidebar_item'>
          <RecentPostWidget title='Related Articles' data={blogsByTag} />
        </div>
      )}
      <div className='cs_sidebar_item widget_categories'>
        <NewsletterStyle5 title='Newsletter Sign Up Form' />
      </div>
    </div>
  )
}
