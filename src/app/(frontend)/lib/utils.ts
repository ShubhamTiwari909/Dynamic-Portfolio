import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string) {
  // Remove all non-numeric characters except leading +
  return phone.replace(/[^+\d]/g, '')
}

export const uploadThingUrlConstructor = (uploadId: string | null | undefined) =>
  `https://${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh/f/${uploadId}`
