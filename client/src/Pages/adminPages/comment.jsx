import axios from "axios";

const Comment = (props) => {
  const deleteHandler = () => {
    axios.delete(`http://localhost:3000/api/admin/reviews/${props.comment.reviews_id}`).then(() => {
      props.fetchComments();
    });
  };
  console.log(props)

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-md shadow-md">
      <div>
        <p className="text-lg font-semibold">
         review : {props.comment.body}
        </p>
      </div>
      <button
        className="bg-darkRed text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={deleteHandler}
      >
        Delete Review
      </button>
    </div>
  );
};

export default Comment;