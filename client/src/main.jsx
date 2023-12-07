import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home.jsx";
import UserLog from "./Pages/UserLog.jsx";
import UserSign from "./Pages/UserSign.jsx";
import Basket from "./Pages/Basket.jsx";
import Admin from "./Pages/Admin.jsx";
import Product from "./Pages/Product.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userlog",
    element: <UserLog />,
  },
  {
    path: "/usersign",
    element: <UserSign />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
