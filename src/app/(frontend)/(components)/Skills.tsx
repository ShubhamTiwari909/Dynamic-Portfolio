'use client'
import { Container, Flex, RingProgress, Text } from '@mantine/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import store from '../hooks/store'
import { themeColors, themesStore } from '../hooks/theme'

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
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]

  const color = store((state) => state.color)
  const currentColor = themeColors[color]

  return (
    <Container size="xl" className="w-full py-10 lg:py-16 scroll-m-20" id="skills">
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2 className={`mb-10 text-6xl text-center ${currentTheme['text-200']}`}>{skills.title}</h2>
      </ScrollAnimation>
      <Flex wrap="wrap" gap={50} justify="center" className="mb-16">
        {skills.skills.map((skill, index) => {
          return (
            <ScrollAnimation key={index} animateIn="animate__fadeInUp">
              <RingProgress
                size={240}
                sections={[
                  {
                    value: Number(skill.value),
                    color: skill.color ? `#${skill.color}` : currentColor['500'],
                  },
                ]}
                label={
                  <Text c="#ffffff" fw={700} ta="center" size="xl">
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
