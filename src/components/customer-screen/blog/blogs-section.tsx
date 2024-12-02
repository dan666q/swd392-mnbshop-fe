import React from 'react'
import { useViewBlogList } from '@/features/manager-feature/blog-mng/view-blog/use-view-blog-list'
import { BlogData } from '@/types'
import { Spin } from 'antd'
import ViewMore from '../view-more'
import BlogCard from './blog-card'

const BlogsSection = () => {
  const { data, isLoading } = useViewBlogList()

  if (isLoading) {
    return <Spin tip="Loading..." />
  }

  // Sort blogs by creation date (assuming a field like `createdAt` in BlogData)
  const sortedData = data?.sort((a: BlogData, b: BlogData) => {
    // Assuming createdAt is a Date object
    return new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
  })

  // Take the latest 4 blogs
  const latestBlogs = sortedData?.slice(0, 4)

  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Read Latest Blogs</h2>
          <ViewMore />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {latestBlogs?.map((blog: BlogData) => (
            <BlogCard key={blog.blogId} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogsSection
