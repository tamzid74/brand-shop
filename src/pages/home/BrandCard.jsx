import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { brandName, brandImage } = brand;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={brandImage} alt={brandName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brandName}</h2>
      </div>
    </div>
  );
};
export default BrandCard;
BrandCard.propTypes = {
  brand: PropTypes.object,
};
