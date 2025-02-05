'use client'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import store from '../../hooks/store'
import { themesStore } from '../../hooks/theme'

const Heading = ({ heading }: { heading: string }) => {
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]
  return (
    <ScrollAnimation animateIn="animate__rubberBand">
      <h2 className={`mb-10 text-6xl text-center ${currentTheme['text-200']}`}>{heading}</h2>
    </ScrollAnimation>
  )
}

export default Heading
