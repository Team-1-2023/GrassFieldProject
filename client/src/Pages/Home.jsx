import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

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
    <div>
      <div className="text-3xl font-bold underline">Hi winek cv</div>
      <div className="skcsjcbjqbcj">Haya weeeeenk</div>

      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500"
            name="radioOption"
            value="option1"
            chec={selectedOption === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <span className="ml-2">Fragrance</span>
        </label>

        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            className="form-radio text-blue-500"
            name="radioOption"
            value="option2"
            chec={selectedOption === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <span className="ml-2">Skincare</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            className="form-radio text-blue-500"
            name="radioOption"
            value="option2"
            chec={selectedOption === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <span className="ml-2">Makeup </span>
        </label>
      </div>

    </div>
  );
};

export default Home;
