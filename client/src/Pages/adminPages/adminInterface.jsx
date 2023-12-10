import axios from "axios"
import Form from "./form"
import { useEffect, useState } from "react"
import ProductList from "./productList"
import Users from "./users"

const AdminInterface = () => {
    const [products, setProducts] = useState([])
    const [view, setView] = useState("products")
    const [users,setUsers] = useState([])
    const [formView, setFormView] = useState(false)

    const fetchProducts = ()=>{
        axios.get("http://localhost:3000/api/admin/products").then((response)=>{
             setProducts(response.data)
             setView("products")
        })
    }
    const fetchUsers = ()=>{
        axios.get("http://localhost:3000/api/admin/users").then((response)=>{
            setUsers(response.data)
            setView("users")
        })
    }

    return (
        <div>
            <div className=" bg-white mt-6 ml-10 mr-6 h-20">
                <button className=" bg-white h-12  w-56  mt-4 ml-5  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >log out</button>
                <button className=" bg-white float-right w-56 h-12 mt-4 mr-5  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>setFormView(!formView)}>add product</button>
            </div>
            {formView && <Form fetchProducts={fetchProducts}/>}
            <div className="flex-auto flex h-36">
                <div className=" flex-1 w-10">
                    <button onClick={(e)=>{fetchProducts}} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >products</button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-5" onClick={fetchUsers}>users</button>
                </div>
                <div className=" flex-1 w-52">
                    {view === "products"&&<ProductList products ={products} fetchProducts={fetchProducts}/>}
                    {view === "users" &&<Users fetchUsers = {fetchUsers} users = {users}/>}
                </div>
            </div>
        </div>
    )
}
export default AdminInterface