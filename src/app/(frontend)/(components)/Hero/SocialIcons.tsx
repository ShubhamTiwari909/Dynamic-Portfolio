'use client'
import { Flex } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaBloggerB } from 'react-icons/fa'
import store from '../../hooks/store'
import { themesStore } from '../../hooks/theme'
import { Page } from '@/payload-types'

type Icon = {
  github: React.ReactElement
  linkedin: React.ReactElement
  blog: React.ReactElement
  [key: string]: React.ReactElement // Add this index signature
}

const Icons: Icon = {
  github: <FaGithub color="black" size="1.75rem" />,
  linkedin: <FaLinkedin color="black" size="1.75rem" />,
  blog: <FaBloggerB color="black" size="1.75rem" />,
}

const SocialIcons = ({
  githubLink,
  linkedinLink,
  blogLink,
}: {
  githubLink: Page['hero']['githubLink']
  linkedinLink: Page['hero']['linkedinLink']
  blogLink: Page['hero']['blogLink']
}) => {
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]
  const links = [
    {
      name: 'github',
      link: githubLink,
    },
    {
      name: 'linkedin',
      link: linkedinLink,
    },
    {
      name: 'blog',
      link: blogLink,
    },
  ]
  return (
    <Flex gap={40} wrap={'wrap'} className="mb-10">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={(link.link as string) || ''}
            target="_blank"
            className={`p-2 rounded-full ${currentTheme['bg-200']} animate__animated animate__rotateIn`}
          >
            {Icons[link.name]}
          </Link>
        )
      })}
    </Flex>
  )
}

export default SocialIcons
