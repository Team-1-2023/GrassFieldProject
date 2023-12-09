import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Basket =  ()=> {
//         const {id} = useParams
// const [products,setProducts]=useState([])
// const [total,setTotal]=useState(0)

// useEffect(()=>{
//         axios.get(`http://localhost:3000/api/basket/${id}`)
//         .then((response)=>{setProducts(response.data)})
//         .catch((error)=>{console.error(error)})
// })





// return (
//         <Layout>
//                 <>{products.map(product =>{
//                         setTotal(total+product.price)
//                         return <h2 key={product.id}>{product.name}</h2>
//                 })}
//                 </>
//                 <h2>Your total is: {total}</h2>
//                 <button className="bg-gray-800 p-4 flex justify-between items-center" onClick={(e)=>{Navigate('/')}}>Checkout</button>
//         </Layout>
// )
return <h1>not done </h1>
}



export default Basket