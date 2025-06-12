'use client'
import React from 'react'
import { getClientSideURL } from './getURL'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export const RefreshRouteOnSave = () => {
  const router = useRouter()

  return <PayloadLivePreview refresh={() => router.refresh()} serverURL={getClientSideURL()} />
}
