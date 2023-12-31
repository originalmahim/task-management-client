import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AuthProvider from './Components/Provider/AuthProvider';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Whytask from './Components/Pages/whytask';
import Faq from './Components/Pages/Faq';
import Error from './Components/Pages/Error';
import Task from './Components/Pages/Task';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <Error></Error> ,
    children: [
      {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <SignUp></SignUp>
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'task',
          element: <Task></Task>
        }
      ]
    },
    {
      path: '/whytask',
      element: <Whytask></Whytask>
    },
    {
      path: '/faq',
      element: <Faq></Faq>
    }

  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
