import { Blog, Doctor, Tag } from '@payload-types'

const BlogsByAuthorAndTagView = ({
  tagDetails,
  authorDetails,
  blogsData,
}: {
  authorDetails: Doctor
  tagDetails: Tag
  blogsData: Blog[]
}) => {
  return <h1>Author Blogs</h1>
}

export default BlogsByAuthorAndTagView
