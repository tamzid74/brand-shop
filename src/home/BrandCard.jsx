import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { brandName, brandImage } = brand;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${brandName}`);
  };
  return (
    <div onClick={handleClick} className="card bg-base-100 shadow-xl">
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
