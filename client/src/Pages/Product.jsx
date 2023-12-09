import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    // const { id } = useParams();
    // const [product, setProduct] = useState({});
    // const [review, setReview] = useState("");

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/api/products/${id}`);
    //             setProduct(response.data);
    //         } catch (error) {
    //             console.error("Error fetching product details:", error);
    //         }
    //     };

    //     fetchProduct();
    // }, [id]);

    // const AddToBasket = () => {
    // };

    // const SubmitReview = () => {
    // };

    // return (
    //     <div className="flex p-8">
    //         <div className="w-1/2">
    //             <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
    //         </div>
    //         <div className="w-1/2 ml-8">
    //             <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
    //             <p className="text-gray-500 mb-4">{product.description}</p>
    //             <p className="text-gray-500 mb-4">{product.category}</p>
    //             <p className="text-green-600 font-bold mb-4">{product.quantity}</p>
    //             <p className="text-green-600 font-bold mb-4">${product.price}</p>

    //             <div className="flex space-x-4 mb-4">
    //                 <button
    //                     className="bg-blue-500 text-white px-4 py-2 rounded"
    //                     onClick={AddToBasket}
    //                 >
    //                     Add to Basket
    //                 </button>
    //             </div>

    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2">
    //                     Your Review:
    //                 </label>
    //                 <textarea
    //                     rows="3"
    //                     value={review}
    //                     onChange={(e) => setReview(e.target.value)}
    //                     className="w-full border rounded-md p-2"
    //                 ></textarea>
    //             </div>

    //             <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={SubmitReview}>Submit Review
    //             </button>
    //         </div>
    //     </div>
    // );
};

export default Product;