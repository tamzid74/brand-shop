import PropTypes from "prop-types";

const MyCartCard = ({ cart }) => {
  console.log(cart.product);
  const { name, photo, brandName, price, rating, type } = cart.product;
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
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;

MyCartCard.propTypes = {
  cart: PropTypes.object,
};
