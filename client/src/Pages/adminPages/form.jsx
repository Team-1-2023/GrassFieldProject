import { useState } from "react";
import axios from "axios";
import { imageDb } from "./firebase.js";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [productType, setProductType] = useState("");
  const [image, setImage] = useState("");

  const handleClick = () => {
    const imageRef = ref(imageDb, `files/${v4()}`);
    uploadBytes(imageRef, image)
      .then(() => {
        getImage();
      })
      .then(() => {
        console.log(imageUrl, "image");
      });
  };

  const getImage = () => {
    listAll(ref(imageDb, "files")).then((imgs) => {
      console.log("kkkkk", imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImageUrl(url);
        });
      });
    });
  };

  const postProduct = () => {
    axios
      .post("http://localhost:3000/api/admin/products", {
        name,
        category,
        price,
        quantity,
        description,
        imageUrl,
        productType,
      })
      .then(() => {
        props.fetchProducts();
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <input
        type="text"
        placeholder="Name"
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="input-field"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        className="input-field"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        className="input-field"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="input-field"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Type"
        className="input-field"
        onChange={(e) => setProductType(e.target.value)}
      />
      <input
        type="file"
        className="input-field"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button
        onClick={handleClick}
        className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Upload Image
      </button>
      <button onClick={postProduct} className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Add Product
      </button>
    </div>
  );
};
export default Form;