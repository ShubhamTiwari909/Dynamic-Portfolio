'use client'
import { Button, Flex } from '@mantine/core'
import React from 'react'
import store from '../../hooks/store'
import { themesStore } from '../../hooks/theme'

const ExploreButton = ({ profileLink }: { profileLink: string }) => {
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]
  return (
    <Flex justify="center">
      <Button
        component="a"
        href={profileLink}
        target="_blank"
        size="lg"
        className={currentTheme['bg-500']}
      >
        Explore all blogs
      </Button>
    </Flex>
  )
}

export default ExploreButton
