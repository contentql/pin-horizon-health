import { Blog } from '@payload-types'
import { Metadata } from 'next'

import BlogDetails from '@/components/marketing/blog/BlogDetails/page'
import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

interface PageProps {
  params: { blogSlug: string }
  searchParams: {
    draft: string
  }
}

export const revalidate = 0

const Page = async ({ params }: PageProps) => {
  const { blogSlug } = params

  const decodedSlug = decodeURIComponent(blogSlug)

  const blogData = await serverClient.blog.getBlogBySlug({ slug: decodedSlug })
  const blogsData = await serverClient.blog.getAllBlogsWithoutPagination()

  return (
    <BlogDetails
      blogSlug={blogSlug}
      initialBlogData={blogData as Blog}
      blogsData={blogsData}
    />
  )
}

export async function generateStaticParams() {
  const allBlogs = await serverClient.blog.getAllBlogsWithoutPagination()

  const blogIdsArray = allBlogs?.map(blog => ({ blogId: blog.id }))

  return blogIdsArray
}

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  let blog: Blog | null = null

  try {
    const result = await serverClient.blog.getBlogBySlug({ slug })

    blog = result as Blog
  } catch (error) {
    console.error('Error fetching blog:', error)
  }

  // ? collectionSlug is the name of the page eg.: http://localhost:3000/blog/[id] (`blog` is the collectionSlug)
  return generateMeta({ doc: blog, collectionSlug: 'blog' })
}

export default Page
