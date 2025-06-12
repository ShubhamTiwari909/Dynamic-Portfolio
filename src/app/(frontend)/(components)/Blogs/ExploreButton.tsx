'use client'
import { Button, Flex } from '@mantine/core'
import React from 'react'

const ExploreButton = ({ profileLink }: { profileLink: string }) => {
  return (
    <Flex justify="center">
      <Button
        component="a"
        href={profileLink}
        target="_blank"
        size="lg"
        className="!bg-primary-500"
      >
        Explore all blogs
      </Button>
    </Flex>
  )
}

export default ExploreButton
