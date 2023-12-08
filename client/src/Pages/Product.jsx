import React, { useState } from "react";

const Product = ({ data }) => {
    console.log(data ,"hsddddddddjdbKSBCKQSVCKQSVCKAVS");
//   const [review, setReview] = useState("");

//   const AddToBasket = () => {
//     console.log("data added to basket:",data);
//   };

//   const AddToWishlist = () => {
//     console.log("data added to wishlist:", data);
//   };

//   const SubmitReview = () => {
//     console.log("Review submitted:", review);
//   };

  return (
    <div className="flex p-8">
      <div className="w-1/2">
        <img src={data.imageUrl} alt={data.name} className="w-full h-auto" />
      </div>
      <div className="w-1/2 ml-8">
        <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
        <p className="text-gray-500 mb-4">{data.description}</p>
        <p className="text-gray-500 mb-4">{data.category}</p>
        <p className="text-green-600 font-bold mb-4">{data.quantity}</p>
        <p className="text-green-600 font-bold mb-4">${data.price}</p>

        <div className="flex space-x-4 mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={AddToBasket}
          >
            Add to Basket
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={AddToWishlist}
          >
            Add to Wishlist
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Review:
          </label>
          <textarea
            rows="3"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-md p-2"
          ></textarea>
        </div>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={SubmitReview}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Product;
