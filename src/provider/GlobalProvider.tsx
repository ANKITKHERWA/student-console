'use client'

import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

interface GlobalProviderProps {
  children: ReactNode
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    // <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </ReduxProvider>
  )
}
