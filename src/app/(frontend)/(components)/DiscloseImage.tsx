import { ImgHTMLAttributes} from 'react'

import Image from 'next/image'
import { cn } from '../lib/utils'

export default function DiscloseImage({
  className,
  src,
  alt,
}: ImgHTMLAttributes<HTMLImageElement> & {
  doorClassName?: string
  vertical?: boolean
}) {

  return (
    <div className="relative overflow-hidden rounded-md bg-transparent animate__animated animate__fadeIn">
      <Image
        src={src || '/hero-profile.png'}
        alt={alt || 'Shubham Tiwari'}
        width={400}
        height={400}
        className={cn('h-full object-cover', className)}
      />
    </div>
  )
}
