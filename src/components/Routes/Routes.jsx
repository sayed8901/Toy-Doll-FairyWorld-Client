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
import AnimatedSection from "../AOS-Animate/AnimatedSection";

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
        element: (
          <AnimatedSection>
            <Login></Login>
          </AnimatedSection>
        ),
      },
      {
        path: "/register",
        element: (
          <AnimatedSection>
            <Register></Register>
          </AnimatedSection>
        ),
      },
      {
        path: "/all-toys",
        element: (
          <AnimatedSection>
            <AllToys></AllToys>
          </AnimatedSection>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <AnimatedSection>
              <SingleToyDetailsCard></SingleToyDetailsCard>
            </AnimatedSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <AnimatedSection>
              <MyToys></MyToys>
            </AnimatedSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AnimatedSection>
              <AddToy></AddToy>
            </AnimatedSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <AnimatedSection>
            <Blogs></Blogs>
          </AnimatedSection>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <AnimatedSection>
        <ErrorPage></ErrorPage>
      </AnimatedSection>
    ),
  },
]);

export default router;
