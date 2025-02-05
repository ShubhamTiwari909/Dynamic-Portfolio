'use client'
import { Flex } from '@mantine/core'
import React from 'react'
import store from '../../hooks/store'
import { themesStore } from '../../hooks/theme'
import { Page } from '@/payload-types'

const Stats = ({ stats }: { stats: Page['hero']['stats'] }) => {
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]

  return (
    <Flex
      gap={40}
      wrap="wrap"
      className="p-5 rounded-lg bg-slate-800 lg:py-5 lg:px-8 w-fit animate__animated animate__lightSpeedInRight"
    >
      {stats?.map((stat, index) => {
        return (
          <div
            key={index}
            className={`text-xl text-white lg:pr-10 lg:border-r-2 lg:border-solid lg:last:pr-0 lg:last:border-none ${currentTheme['border-400']}`}
          >
            <p className={`mb-2 font-bold ${currentTheme['text-400']}`}>{stat.statNumber}</p>
            <p className="font-semibold text-slate-200">{stat.statText}</p>
          </div>
        )
      })}
    </Flex>
  )
}

export default Stats
