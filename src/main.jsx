import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import AdminPage from './components/admin/AdminPage.jsx'
import MeetingList from './components/meeting/MeetingList.jsx'
import ServicesList from './components/service/ServicesList.jsx'
import UserPage from './components/user/UserPage.jsx'
import './index.css'


const routesArray = createBrowserRouter([
  {
    path: '/',
    element: <UserPage />,
    errorElement: <div>error page</div>
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: 'services',
        element: <ServicesList />
      },

      {
        path: 'meetings',
        element: <MeetingList />

      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routesArray} />
  </React.StrictMode>,
)
