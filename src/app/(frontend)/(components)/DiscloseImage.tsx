'use client'
import { ImgHTMLAttributes, useEffect, useState } from 'react'

import Image from 'next/image'
import { cn } from '../lib/utils'

export default function DiscloseImage({
  className,
  doorClassName,
  vertical = false,
  src,
  alt,
}: ImgHTMLAttributes<HTMLImageElement> & {
  doorClassName?: string
  vertical?: boolean
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const baseClassName =
    'ease-slow duration-mid absolute bg-sky-500 transition-all animate-out fill-mode-forwards'

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 580 && window.scrollY > 250) {
        setShouldAnimate(true)
      } else {
        setShouldAnimate(false)
      }
    }
    if (window.innerWidth > 580) setShouldAnimate(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-md bg-transparent">
      <Image
        src={src || '/hero-profile.png'}
        alt={alt || 'Shubham Tiwari'}
        onLoad={() => setImageLoaded(true)}
        width={400}
        height={400}
        className={cn('h-full object-cover', className)}
      />

      {imageLoaded && shouldAnimate && (
        <>
          <div
            className={cn(baseClassName, doorClassName, {
              'top-0 h-1/2 w-full slide-out-to-top-full': vertical,
              'bottom-0 left-0 top-0 w-1/2 animate-slide-out-to-left-full': !vertical,
            })}
          />
          <div
            className={cn(baseClassName, doorClassName, {
              'bottom-0 h-1/2 w-full slide-out-to-bottom-full': vertical,
              'bottom-0 right-0 top-0 w-1/2 animate-slide-out-to-right-full': !vertical,
            })}
          />
        </>
      )}
    </div>
  )
}
