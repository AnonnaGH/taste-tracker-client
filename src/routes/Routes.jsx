import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/register/register";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";
import Errorpage from "../pages/Errorpage/Errorpage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/register',
        element: <Register></Register>,

      },
      {
        path: '/login',
        element: <Login></Login>,

      },
      {
        path: '/blog',
        element: <Blog></Blog>,

      }


    ]
  }
])

export default router;