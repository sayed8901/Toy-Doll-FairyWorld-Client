import { createBrowserRouter } from "react-router-dom";

import Layout from "../../Layout/Layout";
import Login from "../../components/Login_register/Login";
import Register from "../../components/Login_register/Register";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import AllToys from "../Toys/AllToys";
import MyToys from "../Toys/MyToys";
import AddToy from "../Toys/AddToy";
import Blogs from "../Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import SingleToyDetailsCard from "../Toys/SingleToyDetailsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><SingleToyDetailsCard></SingleToyDetailsCard></PrivateRoute>
      },
      {
        path: '/my-toys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/add-toy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
