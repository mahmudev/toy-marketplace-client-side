import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componets/home/Home";
import Login from "../componets/auth/Login";
import Register from "../componets/auth/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../componets/pages/ErrorPage";
import Blogs from "../componets/pages/Blogs";
import Profile from "../componets/pages/Profile";
import Toy from "../componets/pages/Toy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "toy/:id",
        element: <PrivateRoute> <Toy></Toy> </PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/products/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
