'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import store from '../../hooks/store'
import { themesStore } from '../../hooks/theme'

const ProjectImage = ({ src, alt, ...props }: { src: string; alt: string }) => {
  const [imageSrc, setImageSrc] = useState('')
  const theme = store((state) => state.theme)
  const currentTheme = themesStore[theme]

  useEffect(() => {
    if (src === '') {
      const randomValue = Date.now() // Unique value for each refresh
      setImageSrc(`https://picsum.photos/1920/1080?random=${randomValue}`)
    } else {
      setImageSrc(src)
    }
  }, [])
  return (
    <Image
      src={imageSrc || 'https://picsum.photos/1920/1080'}
      width={300}
      height={300}
      alt={alt || 'Ramdome picture'}
      className={`object-cover min-h-60 w-full lg:w-fit rounded-2xl border-2 border-solid ${currentTheme['border-400']} mb-5 lg:mb-0`}
      {...props}
    />
  )
}

export default ProjectImage
