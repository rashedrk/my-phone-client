import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Phones from './components/Phones'
import Phone from './components/Phone'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/phones',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phone/')
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:3000/phone/${params.id}`)
      }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
