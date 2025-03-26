import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Signin from './components/Signin.jsx'
import Channel from './components/Channel.jsx'
import Register from './components/Register.jsx'
import Error from './components/Error.jsx'
import HomeMenu from './components/HomeMenu.jsx'
import CreateChannel from './components/CreateChannel.jsx'
import VideoPlay from './components/VideoPlay.jsx'


const appRouter=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<HomeMenu/>
    },
    {
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/channel',
    element: <Channel/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/createchannel',
    element:<CreateChannel/>
  },
  {
    path:'/video/:id',
    element:<VideoPlay/>
  }
],
  errorElement:<Error/>,
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
   </StrictMode>,
)
