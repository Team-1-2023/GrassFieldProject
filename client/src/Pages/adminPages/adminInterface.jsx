import axios from "axios"
import Form from "./form"
import { useEffect, useState } from "react"

const AdminInterface = () => {
    const [products, setProducts] = useState([])
    const [view, setView] = useState(false)

    const fetchProducts = ()=>{
        axios.get("http://localhost:3000/api/admin/products").then((response)=>{
            console.log(response.data)
        })
    }

    return (
        <div>
            <div className=" bg-onyx mt-6 ml-10 mr-6 h-20">
                <button className=" bg-white h-12  w-56  mt-4 ml-5">log out</button>
                <button className=" bg-white float-right w-56 h-12 mt-4 mr-5" onClick={()=>setView(!view)}>add product</button>
            </div>
            {view && <Form/>}
            <div className="flex-auto flex h-36">
                <div className=" flex-1 w-10">
                    sqd
                </div>
                <div className=" flex-1 w-52">
                    sqd
                </div>
            </div>
        </div>
    )
}
export default AdminInterface