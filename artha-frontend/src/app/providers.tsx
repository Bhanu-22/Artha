import type { PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FeatureProvider } from '@/core/feature-flags'

const queryClient = new QueryClient()

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <FeatureProvider>{children}</FeatureProvider>
    </QueryClientProvider>
  )
}
