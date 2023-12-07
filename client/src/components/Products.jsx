import React from "react";

const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((product) => (
        <div key={product.id} className="border p-4 hover:scale-105 transition-transform">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-32 object-cover mb-4"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-green-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
