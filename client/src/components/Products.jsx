import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  // const [products,setProducts]=useState(data)
  // const filterProducts = (type,category)=> {
  // axios.get(`http://localhost:3000/api/products/${category}/${type}`)
  // .then(response=>setProducts(response.data))
  // .catch(error=>console.error(error))
  // }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((product) => (
        <div
          key={product.idproducts}
          className="border p-4 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <p className="text-green-600 font-bold mb-2">${product.price}</p>
          <Link
            to={`/products/${product.idproducts}`}
            className="bg-red-800 text-white px-4 py-2 rounded-full"
          >
            Product Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
