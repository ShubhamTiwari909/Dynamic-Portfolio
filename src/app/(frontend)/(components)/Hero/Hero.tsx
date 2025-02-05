'use client'
import { Button, Container, Flex } from '@mantine/core'
import React from 'react'
import SocialIcons from './SocialIcons'
import Stats from './Stats'
import DiscloseImage from '../DiscloseImage'
import store from '../../hooks/store'
import { themesStore } from '../../hooks/theme'
import { Page } from '@/payload-types'
import { uploadThingUrlConstructor } from '../../lib/utils'

const Hero = ({ data }: { data: Page['hero'] }) => {
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]

  return (
    <Container size="xl" className="w-full py-10 lg:py-16 scroll-m-20" id="introduction">
      <Flex className="!block lg:!flex lg:justify-between">
        <div className="mb-10 lg:mb-0">
          <p className="mb-3 text-2xl text-slate-400 animate__animated animate__backInDown">
            {data.tagline}
          </p>
          <p className="mb-8 text-4xl text-slate-300 animate__animated animate__backInLeft">
            {data.name}
          </p>
          <h1
            className={`mb-5 font-serif text-5xl ${currentTheme['text-500']} lg:text-6xl animate__animated animate__bounceIn`}
          >
            {data.role}
          </h1>
          <SocialIcons
            githubLink={data.githubLink}
            linkedinLink={data.linkedinLink}
            blogLink={data.blogLink}
          />
          <Flex gap={40} wrap="wrap" className="mb-10">
            <Button
              size="lg"
              component="a"
              href={data.hireme as string}
              target="_blank"
              className={`animate__animated animate__fadeIn ${currentTheme['bg-500']}`}
            >
              Hire me
            </Button>
            <Button
              size="lg"
              className={`animate__animated animate__fadeIn ${currentTheme['bg-500']}`}
              component="a"
              href={data.downloadcv as string}
              target="_blank"
              download
            >
              Download CV
            </Button>
          </Flex>
          <Stats stats={data.stats} />
        </div>
        <DiscloseImage
          src={uploadThingUrlConstructor(
            typeof data.heroImage !== 'string' ? data.heroImage._key : '',
          )}
          alt={typeof data.heroImage !== 'string' ? data.heroImage.alt : ''}
          doorClassName={currentTheme['bg-100']}
        />
      </Flex>
    </Container>
  )
}

export default Hero
