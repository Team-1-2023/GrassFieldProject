import "./index.css";
import "./style.scss"
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
import AdminProduct from './Pages/adminPages/AdminProd.jsx';
import { UserContexProvider } from '../context/UserContext.jsx';
import Layout from "./components/Layout.jsx";

const Main = () => {
  return (
   
    <UserContexProvider>
      <Router>
        <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="basket/:id" element={<Basket />} />
          <Route path="products/:id" element={<Product />} />
        </Route>
          <Route path="userlog" element={<UserLog />} />
          <Route path="usersign" element={<UserSign />} />
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