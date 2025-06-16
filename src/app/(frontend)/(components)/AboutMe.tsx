'use client'
import { Button, Container, Flex } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Media } from '@/payload-types'
import { uploadThingUrlConstructor } from '../lib/utils'

type AboutMeProps = {
  title: string
  description: string
  downloadCv: string
  aboutIllustration: string | Media
  id?: string | null
  blockName?: string | null
  blockType: 'aboutme'
}

const AboutMe = ({ aboutme, blockId }: { aboutme: AboutMeProps, blockId: string | null | undefined  }) => {
  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id={`about-${blockId}`}
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2 className="mb-5 text-6xl text-center lg:mb-0 text-primary-200">{aboutme.title}</h2>
      </ScrollAnimation>

      <Flex justify="space-around" align="center" wrap="wrap">
        <Image
          src={uploadThingUrlConstructor(
            typeof aboutme.aboutIllustration !== 'string' ? aboutme.aboutIllustration._key : '',
          )}
          alt={typeof aboutme.aboutIllustration !== 'string' ? aboutme.aboutIllustration.alt : ''}
          width={500}
          height={500}
          className="object-cover"
        />
        <ul className="max-w-xl space-y-5 text-xl lg:text-2xl text-primary-300 rounded-xl font-medium [text-shadow:1px_1px_2px_rgba(0,0,0,1)]">
          <ScrollAnimation animateIn="animate__pulse">
            <p>{aboutme.description}</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__swing">
            <li>
              <Button
                className="!bg-primary-500"
                size="lg"
                component="a"
                href={aboutme.downloadCv}
                download
              >
                Download CV
              </Button>
            </li>
          </ScrollAnimation>
        </ul>
      </Flex>
    </Container>
  )
}

export default AboutMe
