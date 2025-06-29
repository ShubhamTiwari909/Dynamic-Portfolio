'use client'
import { Button, Container, Flex } from '@mantine/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Media } from '@/payload-types'
import ProjectImage from './ProjectImage'
import { uploadThingUrlConstructor } from '../../lib/utils'

type ProjectProps = {
  title: string
  projects:
    | {
        title: string
        description: string
        link: string
        projectCover: string | Media
        id?: string | null
      }[]
    | null
    | undefined
}

const Project = ({ project, blockId }: { project: ProjectProps, blockId: string | null | undefined }) => {
  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id={`projects-${blockId}`}
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2 className="mb-10 text-6xl text-center text-primary-200">{project.title}</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn">
        <ul className="space-y-10">
          {project?.projects?.map((project) => (
            <Flex
              key={project.id}
              component="li"
              className="border-8 border-solid bg-primary-100 border-primary-400 rounded-2xl px-3 py-5 lg:px-5 lg:py-8 min-h-60 flex-wrap lg:flex-nowrap"
            >
              {project.projectCover && (
                <ProjectImage
                  src={uploadThingUrlConstructor(
                    typeof project.projectCover !== 'string' ? project.projectCover._key : '',
                  )}
                  alt={project.title}
                />
              )}
              <Flex direction="column" justify="space-between" className="lg:py-3 lg:px-8">
                <div>
                  <h3 className="text-2xl text-primary-900 font-semibold mb-3">{project.title}</h3>
                  <p className="text-base text-primary-900 mb-10">{project.description}</p>
                </div>
                <Button
                  component="a"
                  href={project.link || '#'}
                  target="_blank"
                  size="md"
                  className="!bg-primary-500 w-fit"
                >
                  Checkout project
                </Button>
              </Flex>
            </Flex>
          ))}
        </ul>
      </ScrollAnimation>
    </Container>
  )
}

export default Project
