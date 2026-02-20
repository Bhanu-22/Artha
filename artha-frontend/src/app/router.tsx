import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, MarketingLayout } from '@/layouts'
import { DashboardPage } from '@/modules/dashboard'
import { LandingPage } from '@/public-pages/landing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
])
