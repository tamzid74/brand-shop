import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, shortDescription, photo } = product;
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
            <button className="btn btn-sm btn-outline btn-wide">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
