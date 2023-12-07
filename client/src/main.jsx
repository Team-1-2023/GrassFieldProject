import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import User from "./Pages/Product"
import Basket from "./Pages/Basket"
import Admin from "./Pages/Admin"
import Product from "./Pages/Product";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
  {
    path: "/basket",
    element: <Basket/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
