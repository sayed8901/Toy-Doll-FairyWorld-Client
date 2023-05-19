import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";

import AuthProvider from "./AuthContext/AuthProvider";
import LazyLoad from "react-lazy-load";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LazyLoad>
        <RouterProvider router={router} />
      </LazyLoad>
    </AuthProvider>
  </React.StrictMode>
);
