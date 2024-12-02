import React from 'react'
import { useViewBlogList } from '@/features/manager-feature/blog-mng/view-blog/use-view-blog-list'
import BlogCard from '@/components/customer-screen/blog/blog-card'
import { BlogData } from '@/types'

const BlogsList: React.FC = () => {
  const { data, isLoading, isError } = useViewBlogList()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading blogs.</div>
  }

  return (
    <div className="container page">
      <section className="page__container">
        <div className="page__row">
          <h2 className="page__heading">Blog</h2>
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {data?.map((blog: BlogData) => (
            <BlogCard key={blog.blogId} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogsList
