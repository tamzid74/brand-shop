import PropTypes from "prop-types";



const ProductsCard = ({ product }) => {
  const { photo, name, brandName, price, type, rating } = product;
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
          <p>{price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{brandName}</div>
            <div className="badge badge-outline">{type}</div>
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
