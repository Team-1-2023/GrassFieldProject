import axios from "axios";
import { useState } from "react";

const Product = (props)=>{
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
        <div>
            <p>{props.product.name}</p>
            <img src={props.product.imageUrl} alt="" className=" w-14 h-14"/>
            <p>{props.product.price}$</p>
            <input type="text" placeholder="new price" onChange={e=>setNewPrice(e.target.value)} />
            <button className=" bg-green-500" onClick={updateHandler}>update price</button>
            <button onClick={removeHandler} className=" bg-darkRed">remove product</button>
            
        </div>
    )
}
export default Product; 