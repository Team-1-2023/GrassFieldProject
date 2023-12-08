import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "../components/Products.jsx";
import Layout from "../components/Layout.jsx";

const Home = () => {
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
    getData();
  }, []);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Layout>
      <div className="flex p-8">
        <div className="w-150 h-50 bg-gray-200 p-4 rounded">
          <label className="flex items-center mb-2">
            <input
              type="radio"
              className="form-radio text-blue-500"
              name="radioOption"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <span className="ml-2">Fragrance</span>
          </label>

          <label className="flex items-center mb-2">
            <input
              type="radio"
              className="form-radio text-blue-500"
              name="radioOption"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={() => handleRadioChange("option2")}
            />
            <span className="ml-2">Skincare</span>
          </label>

          <label className="flex items-center mb-2">
            <input
              type="radio"
              className="form-radio text-blue-500"
              name="radioOption"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={() => handleRadioChange("option3")}
            />
            <span className="ml-2">Makeup</span>
          </label>
        </div>
        <div className="flex-grow ml-8">
          <Products data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
