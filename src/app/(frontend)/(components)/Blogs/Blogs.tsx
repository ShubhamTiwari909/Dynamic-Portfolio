import { Container } from '@mantine/core'
import React from 'react'
import MyBlogs from './MyBlogs'
import Heading from './Heading'

const Blogs = ({
  heading,
  blogApi,
  blogApiKey,
  profileLink,
  blockId,
}: {
  heading: string
  blogApi: string
  blogApiKey: string
  profileLink: string,
  blockId?: string | null | undefined
}) => {
  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 lg:!px-0 scroll-m-20"
      id={`blogs-${blockId}`}
    >
      <Heading heading={heading} />
      <MyBlogs blogApiKey={blogApiKey} profileLink={profileLink} blogApi={blogApi} />
    </Container>
  )
}

export default Blogs
