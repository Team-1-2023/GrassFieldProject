// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import Home from "./Pages/Home.jsx";
// import UserLog from "./Pages/UserLog.jsx"
// import UserSign from "./Pages/UserSign.jsx"
// import Basket from "./Pages/Basket.jsx"
// import Admin from "./Pages/Admin.jsx"
// import Product from "./Pages/Product.jsx";

// import AdminInterface from "./Pages/adminPages/adminInterface.jsx";
// import {UserContexProvider}   from "../context/UserContext.jsx";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import './style.scss'
// import AdminProduct from "./Pages/adminPages/AdminProd.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/userlog",
//     element: <UserLog />,
//   },
//   {
//     path: "/usersign",
//     element: <UserSign />,
//   },
//   {
//     path: "/basket/:id",
//     element: <Basket />,
//   },
//   {
//     path: "/products/:id",
//     element: <Product />,
//   },
//   {
//     path: "/admin",
//     element: <Admin />,
   
    
//   },
//   {path:"interface" ,
//   element:<AdminInterface/>},
//   {path:"product" ,
//   element:<AdminProduct/>}
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <div className='app'>
//     <div className='container'>
//       <React.StrictMode >
//         <UserContexProvider>
//         <RouterProvider router={router} />
//         </UserContexProvider>
//       </React.StrictMode>
//     </div>
//   </div>
// )
import "./index.css";

import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import UserLog from './Pages/UserLog.jsx';
import UserSign from './Pages/UserSign.jsx';
import Basket from './Pages/Basket.jsx';
import Admin from './Pages/Admin.jsx';
import Product from './Pages/Product.jsx';
import AdminInterface from './Pages/adminPages/adminInterface.jsx';
import { UserContexProvider } from '../context/UserContext.jsx';
import AdminProduct from './Pages/adminPages/AdminProd.jsx';

const Main = () => {
  return (
    <UserContexProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userlog" element={<UserLog />} />
          <Route path="usersign" element={<UserSign />} />
          <Route path="basket/1" element={<Basket />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="admin" element={<Admin />}>
            <Route path="interface" element={<AdminInterface />} />
            <Route path="product" element={<AdminProduct />} />
          </Route>
        </Routes>
      </Router>
    </UserContexProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);