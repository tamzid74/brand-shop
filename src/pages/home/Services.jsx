import icon1 from "../../assets/icons/free-delivery.png";
import icon2 from "../../assets/icons/secure-payment.png";
import icon3 from "../../assets/icons/help-desk.png";
import icon4 from "../../assets/icons/shield.png";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10">
      {/* {card-1} */}
      <div className="card card-compact w-full">
        <figure>
          <img className="w-20" src={icon1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Free Delivery</h2>
          <p>And free returns. See checkout for delivery dates.</p>
        </div>
      </div>
      {/* {card-2} */}
      <div className="card card-compact w-full">
        <figure>
          <img className="w-20" src={icon2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Safe Payment</h2>
          <p>Pay with the world’s most popular and secure payment methods.</p>
        </div>
      </div>
      {/* {card-3} */}
      <div className="card card-compact w-full">
        <figure>
          <img className="w-20" src={icon3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shop With Confidence</h2>
          <p>
            Our Buyer Protection covers your purchase from click to delivery.
          </p>
        </div>
      </div>
      {/* {card-4} */}
      <div className="card card-compact w-full">
        <figure>
          <img className="w-20" src={icon4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">24/7 Help Center</h2>
          <p>Have a question? Call a Specialist or chat online.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
