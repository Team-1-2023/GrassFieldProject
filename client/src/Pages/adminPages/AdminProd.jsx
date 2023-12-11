import axios from "axios";
import { useState } from "react";

const AdminProduct = (props) => {
  const [newPrice, setNewPrice] = useState("");

  const updateHandler = () => {
    axios.put(`http://localhost:3000/api/admin/products/${props.product.idproducts}`, { price: newPrice })
      .then(() => {
        props.fetchProducts();
      });
  };

  const removeHandler = () => {
    axios.delete(`http://localhost:3000/api/admin/products/${props.product.idproducts}`)
      .then(() => {
        props.fetchProducts();
      });
  };

  return (
    <div className="mb-4">
      <div className=" items-center bg-darkRed p-2">
        <p className="inline w-12 text-white">name: {props.product.name}</p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={props.product.imageUrl} alt="" className="w-14 h-14" />
        <p className="inline">${props.product.price}</p>
        <input
          type="text"
          placeholder="Price $"
          id="price"
          className="inline ml-5 rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-13"
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button
          className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={updateHandler}
        >
          Update Price
        </button>
        <button
          className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={removeHandler}
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default AdminProduct;