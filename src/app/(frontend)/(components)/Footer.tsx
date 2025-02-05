'use client'
import { Container, Flex, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import SocialIcons from './Hero/SocialIcons'
import store from '../hooks/store'
import { themesStore } from '../hooks/theme'
import { Page } from '@/payload-types'
import { formatPhoneNumber } from '../lib/utils'

const Links = [
  {
    label: 'Introduction',
    href: '#introduction',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Blogs',
    href: '#blogs',
  },
]

const Footer = ({ data }: { data: Page['footer'] }) => {
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]
  return (
    <Container
      size="xl"
      className="!max-w-full !mx-0 lg:flex lg:justify-center lg:items-center bg-slate-950"
    >
      <div className="py-10 lg:py-16">
        <Flex wrap="wrap" align="center" gap={80} className="mb-10 !flex-col lg:!flex-row !gap-y-5">
          {Links.map((link, index) => {
            return (
              <Link key={index} href={link.href} className={`${currentTheme['text-200']} text-xl`}>
                {link.label}
              </Link>
            )
          })}
        </Flex>
        <Flex justify="center" wrap="wrap">
          <SocialIcons
            githubLink={data.githubLink}
            linkedinLink={data.linkedinLink}
            blogLink={data.blogLink}
          />
        </Flex>
        <Flex
          justify="center"
          wrap="wrap"
          gap={40}
          className="pb-10 mb-5 border-b-2 border-b-white/20"
        >
          <div>
            <Link href={`mailto:${data.email}`} className={`${currentTheme['text-200']} text-xl`}>
              {data.email}
            </Link>
          </div>
          <div>
            <Link
              href={`tel:${formatPhoneNumber(data.phone)}`}
              className={`${currentTheme['text-200']} text-xl`}
            >
              {data.phone}
            </Link>
          </div>
        </Flex>
        <Text className={`${currentTheme['text-200']} text-xl text-center`}>
          Developed by {data.name}
        </Text>
      </div>
    </Container>
  )
}

export default Footer
