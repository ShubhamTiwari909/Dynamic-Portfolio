import React from 'react'
import axios from 'axios'
import BlogPreviewCard from './BlogPreviewCard'
import ExploreButton from './ExploreButton'

export type MyBlogs = {
  id: number
  title: string
  description: string
  user: {
    name: string
    username: string
    profile_image: string
    user_id: number
  }
  slug: string
  page_views_count: number
  published_timestamp: string
  cover_image: string
  url: string
}

const MyBlogs = async ({
  blogApi,
  blogApiKey,
  profileLink,
}: {
  blogApi: string
  blogApiKey: string
  profileLink: string
}) => {
  const getBlogs = async () => {
    try {
      const res = await axios.get(`${blogApi}?per_page=12`, {
        method: 'GET',
        headers: {
          'api-key': blogApiKey,
        },
      })
      return res.data
    } catch (error) {
      console.log(error)
      return null
    }
  }
  const data: MyBlogs[] = await getBlogs()

  if (!data) {
    return <div>no data</div>
  }
  return (
    <>
      <ul className="flex flex-wrap items-stretch mb-10 gap-x-10 gap-y-16 lg:mb-16">
        {data?.map((item: MyBlogs) => {
          return (
            <li key={item.id}>
              <BlogPreviewCard
                image={item.cover_image}
                href={item.url}
                title={item.title}
                description={item.description}
                page_views_count={item.page_views_count}
              />
            </li>
          )
        })}
      </ul>
      <ExploreButton profileLink={profileLink} />
    </>
  )
}

export default MyBlogs
