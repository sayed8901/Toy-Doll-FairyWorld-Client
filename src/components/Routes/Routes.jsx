import { createBrowserRouter } from "react-router-dom";

import Layout from "../../Layout/Layout";
import Login from "../../components/Login_register/Login";
import Register from "../../components/Login_register/Register";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
