import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout'
import Timeline from './pages/timeline/Timeline'
import StatsPage from './pages/stats/StatsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/homepage/Homepage'
import { router } from './router/Routes'
import FriendDetailsProvider from './context/FriendDetailsProvider'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendDetailsProvider>

    <RouterProvider router={router} />

    </FriendDetailsProvider>
  </StrictMode>,
)
