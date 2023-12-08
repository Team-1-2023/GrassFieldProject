import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./Pages/Home.jsx";
import UserLog from "./Pages/UserLog.jsx"
import UserSign from "./Pages/UserSign.jsx"
import Basket from "./Pages/Basket.jsx"
import Admin from "./Pages/Admin.jsx"
import Product from "./Pages/Product.jsx";
import {userContexProvider}  from "../context/userContext.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './style.scss'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='app'>
    <div className='container'>
      <React.StrictMode >
        <userContexProvider>
        <RouterProvider router={router} />
        </userContexProvider>
      </React.StrictMode>,
    </div>
  </div>
)
