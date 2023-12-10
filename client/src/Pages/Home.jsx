import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Products from "../components/Products.jsx";
import Layout from "../components/Layout.jsx";
import Filters from "../components/Filters.jsx";

const Home = () => {
  // const {currentUser} = useContext(useContext)
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
console.log(data, "data home");
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // console.log(currentUser)  
     getData();
  }, []);

  // const currentUser=useContext(currentUser)
  // console.log(currentUser) 
  return (
    <Layout>
      <div className="flex p-8 h-screen">
        <Filters/>
        <div className="flex-grow ml-8">
          <Products data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
