import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./Componenets/Layout.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./Pages/Product.tsx";
import Category from "./Pages/Category.tsx";
import Profile from "./Pages/Profile.tsx";
import Cart from "./Pages/Cart.tsx";
import Favorite from "./Pages/Favorite.tsx";
import Orders from "./Pages/Orders.tsx";
import Sucsess from "./Pages/Sucsess.tsx";
import NotFound from "./Pages/NotFound.tsx";
import Cancel from "./Pages/Cancel.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favourite",
        element: <Favorite />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/success",
        element: <Sucsess />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
