'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ProjectImage = ({ src, alt, ...props }: { src: string; alt: string }) => {
  const [imageSrc, setImageSrc] = useState('')

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
      className="object-cover min-h-60 w-full lg:w-fit rounded-2xl border-2 border-solid border-primary-400 mb-5 lg:mb-0"
      {...props}
    />
  )
}

export default ProjectImage
