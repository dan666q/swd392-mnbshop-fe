import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar, Typography, Button, List, Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useViewBlogDetail } from '@/hooks/customer-hook/blog/use-blog-detail'
import { useViewBlogList } from '@/features/manager-feature/blog-mng/view-blog/use-view-blog-list'
import { useAddVote } from '@/hooks/customer-hook/blog/use-add-vote-blog'
import { BlogData } from '@/types'
import { useAuth } from '@/hooks/use-auth'

const { Title, Paragraph } = Typography

type BlogDetailsParams = {
  blogId: string
}

const BlogDetails = () => {
  const { blogId } = useParams<BlogDetailsParams>()
  const id = parseInt(blogId)
  const { data: blog, isLoading, error } = useViewBlogDetail(id)
  const { data: blogListData, isLoading: loadingBlogList, error: blogListError } = useViewBlogList()
  const [suggestions, setSuggestions] = useState<BlogData[]>([])
  const { mutate: addVote } = useAddVote()
  const { user } = useAuth()

  useEffect(() => {
    if (blogListData) {
      const shuffledBlogs = blogListData.sort(() => Math.random() - 0.5)
      setSuggestions(shuffledBlogs.slice(0, 6))
    }
  }, [blogListData])

  if (isLoading || loadingBlogList) return <p>Loading...</p>
  if (error || blogListError) return <p>Error loading blog details</p>

  const tags = typeof blog?.tags === 'string' ? blog.tags.split(',') : blog?.tags || []
  const formatContent = (content: string) => {
    const sections = content.split('\\n\\n')
    return sections.map((section, index) => {
      if (section.startsWith('## ')) {
        return (
          <Title level={2} key={index} className="mt-8 mb-4">
            {section.slice(2)}
          </Title>
        )
      } else if (section.startsWith('### ')) {
        return (
          <Title level={3} key={index} className="mt-6 mb-3">
            {section.slice(3)}
          </Title>
        )
      } else if (section.startsWith('- ')) {
        const items = section.split('\\n')
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="mb-2">
                {item.slice(2)}
              </li>
            ))}
          </ul>
        )
      } else if (section.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
            {section.slice(2)}
          </blockquote>
        )
      } else {
        return (
          <Paragraph key={index} className="mb-4">
            {section}
          </Paragraph>
        )
      }
    })
  }

  const handleVote = (voteType: boolean) => {
    if (!blog || !user?.data.id) return
    const vote = {
      voteType,
      blogId: blog?.blogId,
      userId: user?.data.id,
    }
    console.log('Vote data:', vote) // Log the vote data when vote button is clicked

    addVote(vote)
  }

  return (
    <div className="container mx-auto my-10 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="text-center mb-8">
          <Title level={2} className="mb-2">
            {blog?.title}
          </Title>
          <img src={blog?.blogImg} alt="blog" className="mx-auto mb-4 w-full md:w-3/4" />
          <Typography className="">
            <Paragraph className="mt-8">{formatContent(blog?.content || '')}</Paragraph>
          </Typography>
          <div className="flex items-center justify-center mb-4 mt-8">
            <Avatar icon={<UserOutlined />} />
            <span className="ml-2">{`By ${blog?.userId} on ${new Date(blog?.createAt).toLocaleDateString()}`}</span>
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <Tag key={index} className="mb-2">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span>{`Created at: ${new Date(blog?.createAt).toLocaleDateString()}`}</span>
            <span>{`Updated at: ${new Date(blog?.updateAt).toLocaleDateString()}`}</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span>{`Useful Votes: ${blog?.usefulVote}`}</span>
            <span>{`Not Useful Votes: ${blog?.notUsefulVote}`}</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Button type="primary" onClick={() => handleVote(true)}>
              Useful
            </Button>
            <Button danger onClick={() => handleVote(false)}>
              Not Useful
            </Button>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Button type="link">Share</Button>
        </div>
      </div>
      <div className="col-span-1">
        <Title level={4}>Suggested</Title>
        <List
          itemLayout="vertical"
          dataSource={suggestions}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/blog/${item.blogId}`}>{item.title}</Link>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default BlogDetails
