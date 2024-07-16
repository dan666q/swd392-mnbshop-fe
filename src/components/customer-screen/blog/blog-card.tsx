import React from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from '@/types'
import { ROUTE_PATHS } from '@/router'

type BlogCardProps = {
  blog: BlogData
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div>
      <article className="news-item">
        <figure className="news-item__img-wrap">
          <Link to={`${ROUTE_PATHS.BLOG}/${blog?.blogId}`}>
            <img src={blog?.blogImg} alt={blog?.title} className="news-item__thumb" />
          </Link>
        </figure>
        <section className="news-item__body">
          <h3>
            <Link to={`${ROUTE_PATHS.BLOG}/${blog?.blogId}`} className="news-item__heading">
              {blog?.title}
            </Link>
          </h3>
          <Link to={`${ROUTE_PATHS.BLOG}/${blog?.blogId}`} className="news-item__more">
            Learn More
          </Link>
        </section>
      </article>
    </div>
  )
}
