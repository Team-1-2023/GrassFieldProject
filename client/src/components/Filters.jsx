import React, { useState } from "react";
import Type from "../components/Type";

const Filters = (props) => {
  const [category, setCategory] = useState("");

  return (
    <div className="w-[20%] h-fit bg-gray-200 p-6 rounded gap-2">
      <h4>Category:</h4>
      <label className="flex items-center mb-2">
        <input
          type="radio"
          className="form-radio text-black-500"
          name="radioOption"
          value="Fragrance"
          onChange={(e) => {
            setCategory(e.target.value);
            props.setFilter(e.target.value)
          }}
        />
        <span className="ml-2">Fragrance</span>
      </label>

      <label className="flex items-center mb-2">
        <input
          type="radio"
          className="form-radio text-black-500"
          name="radioOption"
          value="Skincare"
          onChange={(e) => {
            setCategory(e.target.value);
            props.setFilter(e.target.value)
          }}
        />
        <span className="ml-2">Skincare</span>
      </label>

      <label className="flex items-center mb-2">
        <input
          type="radio"
          className="form-radio text-black-500"
          name="radioOption"
          value="Makeup"
          onChange={(e) => {
            setCategory(e.target.value);
            props.setFilter(e.target.value)
          }}
        />
        <span className="ml-2">Makeup</span>
      </label>
      {category && (
        <div>
          <h4>Product type:</h4> <Type cat={category}  setType ={props.setType}/>
        </div>
      )}
    </div>
  );
};

export default Filters;
