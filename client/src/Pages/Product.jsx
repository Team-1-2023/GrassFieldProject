import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetchReviews();
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((error) => console.error(error));
  };

  const fetchReviews = () => {
    axios
      .get(`http://localhost:3000/api/review/${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => console.error(error));
  };

  const AddToBasket = () => {
    axios
      .post(`http://localhost:3000/api/basket/1`, { productid: id })
      .then(() => {
        useNavigate("basket/1");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SubmitReview = (review) => {
    axios
      .post(`http://localhost:3000/api/review/1/${id}`, { body: review })
      .then((response) => {
        fetchReviews();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex p-8">
      <div className="w-1/2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 ml-8">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <p className="text-gray-500 mb-4">{product.category}</p>
        <p className="text-green-600 font-bold mb-4">${product.price}</p>

        <div className="flex space-x-4 mb-4">
          <button
            className="bg-darkRed text-white px-4 py-2 rounded hover:bg-black"
            onClick={() => AddToBasket()}
          >
            Add to Basket
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
          className="bg-darkRed text-white px-4 py-2 rounded hover:bg-black"
          onClick={() => SubmitReview(review)}
        >
          Submit Review
        </button>

       
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Reviews</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            {reviews.map((review) => (
              <p className="text-sm">{review.body}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        
      </div>
    </div>
  );
};

export default Product;