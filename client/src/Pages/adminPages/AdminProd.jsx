import axios from "axios";
import { useState } from "react";

const AdminProduct = (props)=>{
    const [newprice, setNewPrice]= useState("")
console.log(props.product)


    const updateHandler = ()=>{
        axios.put(`http://localhost:3000/api/admin/products/${props.product.idproducts}`,{price: newprice}).then(()=>{
            props.fetchProducts()
        })
    }
    const removeHandler = ()=>{
        axios.delete(`http://localhost:3000/api/admin/products/${props.product.idproducts}`).then(()=>{
            props.fetchProducts()
        })
    }
    return( 
        <div >
            <div>
            <p>{props.product.name}</p>
            <img src={props.product.imageUrl} alt="" className="  w-14 h-14"/>
            <p>{props.product.price}$</p>
            <input type="text" placeholder="price $" id="price" className = " block  rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-13 "  onChange={e=>setNewPrice(e.target.value)} />
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={updateHandler}>update price</button>
            <button onClick={removeHandler} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  >remove product</button>
            </div>
            
        </div>
    )
}
export default AdminProduct; 