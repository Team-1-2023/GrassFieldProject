import axios from "axios";
import Form from "./form";
import { useEffect, useState } from "react";
import ProductList from "./productList";
import Users from "./users";

const AdminInterface = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("products");
  const [users, setUsers] = useState([]);
  const [formView, setFormView] = useState(false);

  const fetchProducts = () => {
    axios.get("http://localhost:3000/api/admin/products").then((response) => {
      setProducts(response.data);
      setView("products");
    });
  };
  useEffect(()=>{
    fetchProducts()
  },[])

  const fetchUsers = () => {
    axios.get("http://localhost:3000/api/admin/users").then((response) => {
      setUsers(response.data);
      setView("users");
    });
  };

  return (
    <div>
      <div className=" mt-6 ml-10 mr-6 h-20 flex items-center justify-between">
        <button className="text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100">
          Log Out
        </button>
        <button
          className="text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100"
          onClick={() => setFormView(!formView)}
        >
          Add Product
        </button>
      </div>

      {formView && <Form fetchProducts={fetchProducts} />}
      
      {!formView && (
        <div className="flex mt-20 ml-6 mr-6">
          <div className="w-32  mr-20">
            <button
              onClick={fetchProducts}
              className="block w-28 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Products
            </button>
            <button
              className="mt-8 w-28 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={fetchUsers}
            >
              Users
            </button>
            <button
              className="mt-8 w-28 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={fetchUsers}
            >
              Comments
            </button>
          </div>

          <div className="flex-1 ">
            {view === "products" && (
              <ProductList products={products} fetchProducts={fetchProducts} />
            )}
            {view === "users" && <Users fetchUsers={fetchUsers} users={users} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInterface;