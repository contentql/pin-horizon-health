'use client'

// Error components must be Client Components
import { useEffect } from 'react'

import ErrorComponent from '@/components/ErrorComponent'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorComponent />
}
