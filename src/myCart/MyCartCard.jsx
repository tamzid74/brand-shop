/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCartCard = ({ cart, carts, setCarts }) => {
  const { _id, name, photo, brandName, price, rating, type } = cart;
  //   console.log(carts)
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tec-zone-shop-server.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = carts.filter(
                (cart) => console.log(cart._id) !== _id
              );
              console.log(setCarts(remaining));
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-80" src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xs md:text-xl">
            {name}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{brandName}</div>
            <div className="badge badge-outline">{type}</div>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="Delete">
            <button
              onClick={() => handleDelete(_id)}
              className=" mt-4 btn btn-error btn-sm w-20 text-base btn-outline "
            >
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;

MyCartCard.propTypes = {
  cart: PropTypes.object,
};
