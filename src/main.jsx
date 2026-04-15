import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Timeline from './pages/timeline/Timeline'
import StatsPage from './pages/stats/StatsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/homepage/Homepage'

const router=createBrowserRouter(
  [
    {
      path:'/',
      Component:RootLayout,
      children:[
        {
          // path:"/",
          index:true,
          Component: Homepage
        },
        {
          path:"/timeline",
          Component:Timeline
        },
        {
          path:"/stats",
          Component:StatsPage
        }
      ],
      errorElement: <NotFoundPage></NotFoundPage>
    }
    
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
