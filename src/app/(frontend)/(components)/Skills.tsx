'use client'
import { Container, Flex, RingProgress, Text } from '@mantine/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

type SkillsProps = {
  title: string
  skills: {
    value: string
    label: string
    color?: string | null
    id?: string | null
  }[]
  id?: string | null
  blockName?: string | null
  blockType: 'technicalSkills'
}
const Skills = ({ skills }: { skills: SkillsProps }) => {
  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id={skills.title.toLocaleLowerCase().replaceAll(' ', '-')}
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2 className="mb-10 text-6xl text-center text-primary-200">{skills.title}</h2>
      </ScrollAnimation>
      <Flex wrap="wrap" gap={50} justify="center" className="mb-16">
        {skills.skills.map((skill, index) => {
          return (
            <ScrollAnimation
              key={index}
              animateIn="animate__fadeInUp"
              className="[&_.mantine-RingProgress-label]:flex [&_.mantine-RingProgress-label]:justify-center"
            >
              <RingProgress
                size={260}
                sections={[
                  {
                    value: Number(skill.value),
                    color: skill.color ? `#${skill.color}` : 'var(--color-primary-400)',
                  },
                ]}
                label={
                  <Text
                    c="#ffffff"
                    fw={700}
                    ta="center"
                    size="xl"
                    className="max-w-48 text-wrap mx-auto"
                  >
                    {skill.label}
                  </Text>
                }
              />
            </ScrollAnimation>
          )
        })}
      </Flex>
    </Container>
  )
}

export default Skills
