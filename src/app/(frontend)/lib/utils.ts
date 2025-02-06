import { Media } from '@/payload-types'
import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string) {
  // Remove all non-numeric characters except leading +
  return phone.replace(/[^+\d]/g, '')
}

export const uploadThingUrlConstructor = (uploadId: string | Media | null | undefined) => {
  if (typeof uploadId === 'string') {
    return `https://${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh/f/${uploadId}`
  } else {
    return ''
  }
}
