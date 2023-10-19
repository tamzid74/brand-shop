import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { _id, photo, name, brandName, price, type, rating } = product;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-80" src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xs md:text-xl">
            {name}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p><span className="font-bold">Price:</span> {price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{brandName}</div>
            <div className="badge badge-outline">{type}</div>
          </div>
          <div className="flex justify-between mt-4">
            <Link to={`/productDetails/${_id}`}>
              <button className="btn btn-info btn-sm "> View Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-success btn-sm">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;

ProductsCard.propTypes = {
  product: PropTypes.object,
};
