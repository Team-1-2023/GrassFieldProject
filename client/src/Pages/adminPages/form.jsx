import { useState } from "react";
import "./admin.css"
import axios from "axios";

const Form = ()=>{
    const [name, setName]= useState("")
    const [category, setCategory]= useState("")
    const [price, setPrice]= useState("")
    const [quantity, setQuantity]= useState("")
    const [description, setDescription]= useState("")
    const [imageUrl, setImageUrl]= useState("")
    const [productType, setProductType]= useState("")

    const postProduct = ()=>{
        axios.post("http://localhost:3000/api/admin/products", {name,category,price,quantity,description,imageUrl,productType}).then((response)=>{
            console.log(response)
        })
    }
    
    return(
        <div>
            <input type="text" placeholder="name" onChange={e=>setName(e.target.value)}/>
            <input type="text" placeholder="category" onChange={e=>setCategory(e.target.value)} />
            <input type="text" placeholder="price" onChange={e=>setPrice(e.target.value)} />
            <input type="text" placeholder="quantity" onChange={e=>setQuantity(e.target.value)} />
            <input type="text" placeholder="description" onChange={e=>setDescription(e.target.value)} />
            <input type="text" placeholder="imageUrl" onChange={e=>setImageUrl(e.target.value)} />
            <input type="text" placeholder="productType" onChange={e=>setProductType(e.target.value)} />
            <button onClick={postProduct} className=" bg-darkRed"> add product</button>
   
            
        </div>
    )
}
export default Form;