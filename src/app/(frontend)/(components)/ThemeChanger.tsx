'use client'
import React from 'react'
import store, { Colors } from '../hooks/store'
import { themesStore } from '../hooks/theme'

const themes: {
  color: Colors
  className: string
}[] = [
  {
    color: 'orange',
    className: 'bg-orange-500',
  },
  {
    color: 'emerald',
    className: 'bg-emerald-500',
  },
  {
    color: 'violet',
    className: 'bg-violet-500',
  },
  {
    color: 'red',
    className: 'bg-red-500',
  },
  {
    color: 'sky',
    className: 'bg-sky-500',
  },
]

const ThemeChanger = () => {
  const toggleTheme = store((state) => state.toggleTheme)
  const toggleColor = store((state) => state.toggleColor)

  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]
  return (
    <div
      className={`lg:fixed lg:top-0 lg:right-1/2 lg:translate-x-1/2 ${currentTheme['bg-200']} px-2 py-1.5 rounded-xl lg:rounded-t-none flex gap-2 justify-center lg:z-[100]`}
    >
      {themes.map((theme, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              toggleTheme(theme.color)
              toggleColor(theme.color)
            }}
            className="text-white"
          >
            <span className={`inline-block size-5 rounded-full ${theme.className}`}></span>
          </button>
        )
      })}
    </div>
  )
}

export default ThemeChanger
