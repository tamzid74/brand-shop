import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, shortDescription, photo } = product;
  const handleAddToCart = () => {
    const myCart = { product };
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added to cart successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end mt-4">
            <button
              onClick={handleAddToCart}
              className="btn btn-sm btn-outline btn-wide"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
