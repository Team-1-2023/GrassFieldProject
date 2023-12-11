import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Products from "../components/Products.jsx";
import Layout from "../components/Layout.jsx";
import Filters from "../components/Filters.jsx";
import UserContext from "../../context/UserContext.jsx";

const Home = () => {
  const {currentUser} = useContext(UserContext)
  const [data, setData] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex p-8 ">
      <Filters />
      <div className="flex-grow ml-8">
        <Products data={data}  />
      </div>
    </div>
  );
};

export default Home;
