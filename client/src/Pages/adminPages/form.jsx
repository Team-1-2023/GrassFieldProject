import { useState } from "react";
import "./admin.css"
import axios from "axios";
import {imageDb} from "./firebase.js"
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid";

const Form = (props)=>{
    const [name, setName]= useState("")
    const [category, setCategory]= useState("")
    const [price, setPrice]= useState("")
    const [quantity, setQuantity]= useState("")
    const [description, setDescription]= useState("")
    const [imageUrl, setImageUrl]= useState("")
    const [productType, setProductType]= useState("")
    const [image, setImage] = useState('')

    const handleClick = ()=>{
        const imageRef = ref(imageDb,`files/${v4()}`)
        console.log(imageRef,"sqjdlkrs")
        uploadBytes(imageRef,image).then(()=>{
            getImage()
            
        }).then(()=>{
            console.log(imageUrl, "image")
        })
        
        
        
      }
      
      const getImage=()=>{
        listAll(ref(imageDb,"files")).then(imgs=>{
          console.log("kkkkk",imgs)
          imgs.items.forEach(val=>{
            getDownloadURL(val).then(url=>{
              setImageUrl(url)
            })
          })
        })
      }
      
    const postProduct = ()=>{
        axios.post("http://localhost:3000/api/admin/products", {name,category,price,quantity,description,imageUrl,productType}).then(()=>{
            props.fetchProducts()
        })
    }
    
    return(
        <div>
            <input type="text" placeholder="name" onChange={e=>setName(e.target.value)}/>
            <input type="text" placeholder="category" onChange={e=>setCategory(e.target.value)} />
            <input type="text" placeholder="price" onChange={e=>setPrice(e.target.value)} />
            <input type="text" placeholder="quantity" onChange={e=>setQuantity(e.target.value)} />
            <input type="text" placeholder="description" onChange={e=>setDescription(e.target.value)} />
            
            <input type="text" placeholder="productType" onChange={e=>setProductType(e.target.value)} />
            <input type="file" onChange={e=>setImage(e.target.files[0])} />
            <button onClick={handleClick}>upload image</button>
            <button onClick={postProduct} className=" bg-darkRed"> add product</button>
   
            
        </div>
    )
}
export default Form;