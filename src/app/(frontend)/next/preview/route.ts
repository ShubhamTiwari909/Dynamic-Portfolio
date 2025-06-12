import { getPayload } from 'payload'

import config from '@payload-config'
import previewRoute from '@/collections/utils/previewRoute'

export async function GET(
  req: {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  } & Request,
) {
  const payload = await getPayload({ config })

  const { searchParams } = new URL(req.url)

  await previewRoute(payload, searchParams, req)
}
