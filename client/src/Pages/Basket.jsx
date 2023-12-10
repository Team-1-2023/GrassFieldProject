import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Basket =  ()=> {
        // const {id} = useParams
const [products,setProducts]=useState([])
const [total,setTotal]=useState(0)

useEffect(()=>{
        axios.get(`http://localhost:3000/api/basket/1`)
        .then((response)=>{setProducts(response.data)})
        .catch((error)=>{console.error(error)})
})

// products.reduce(element,acc=>{},0)
// setTotal(total+product.price)



return (
        <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <>{products.map(product =>{
                        return (
                        <div className="border p-4 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
                                <img className="w-full h-48 object-cover mb-4 rounded-md" src={product.imageUrl}></img>
                                <h2 key={product.id}>{product.name}</h2>
                                </div>)
                })}
                </>
                </div>
                <h2 className="bg-8D0A0A text-black hover:text-red-00 ml-4 px-4 py-2 rounded">Your total is: {total}</h2>
                <button className="bg-red-800 text-white px-4 py-2 rounded-full" onClick={(e)=>{Navigate('/')}}>Checkout</button>

</div>                )

}



export default Basket