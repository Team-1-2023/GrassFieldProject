import React, { useEffect, useState } from "react";


const Type = ({cat,setType}) => {
    const [category,setCategory] = useState('')
    const [types,setTypes] = useState([])
    const [productType,setProductType] = useState("")
    useEffect(()=>{
        setCategory(cat)
        if(cat === "Makeup"){
            setTypes(["Eye","Face","Lips"])
            }
            else if (cat === "Fragrance"){
                setTypes(["Men","Women"])
            }
            else setTypes(["Treatement","Mask","Moisturizers"])
    },[cat])
    

    return types.map(type => {
        
       return ( <label className="flex items-center mb-2">
        <input
          type="radio"
          className="form-radio text-blue-500"
          name="radioOption"
          value={type}
        
          onChange={(e) => {
            setType(e.target.value)
            setProductType(e.target.value)} }
        />
        <span className="ml-2">{type}</span>
      </label>)
    })  
}


export default Type 