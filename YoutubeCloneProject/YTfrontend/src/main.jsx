import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'

const Search = lazy(()=>import('./components/Search.jsx'));
const Headerbody = lazy(()=>import('./components/Headerbody.jsx'));
const Channel = lazy(()=>import('./components/Channel.jsx'));


const ytrouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    //errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Header />,
      },
      {
        path:"/search",
        element:<Search />,
      },
      {
        path:"/video/:id",
        element:<Headerbody/>,
      },
      {
        path:"/channel",
        element:<Channel />,
      },
    ]

  },
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={ytrouter}></RouterProvider>
 )
