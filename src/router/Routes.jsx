import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import StatsPage from "../pages/stats/StatsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router=createBrowserRouter(
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
            path:"/friend/:id",
            element:<FriendDetails></FriendDetails>
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