import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componets/home/Home";
import Login from "../componets/auth/Login";
import Register from "../componets/auth/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../componets/pages/ErrorPage";
import Blogs from "../componets/pages/Blogs";
import ToyDetails from "../componets/pages/ToyDetails";
import AddAToy from "../componets/pages/AddAToy";
import AllToys from "../componets/pages/AllToys";
import MyToys from "../componets/pages/MyToys";
import UpdateToys from "../componets/pages/UpdateToys";

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
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://funko-fanfare.vercel.app/toys/${params.id}`),
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-toy/:id",
        element: (
          <PrivateRoute>
            <UpdateToys></UpdateToys>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://funko-fanfare.vercel.app/toys/${params.id}`),
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
