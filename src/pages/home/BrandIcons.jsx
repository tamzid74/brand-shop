import Marquee from "react-fast-marquee";

import logo1 from "../../assets/icons/apple.png";
import logo2 from "../../assets/icons/samsung.png";
import logo3 from "../../assets/icons/intel.png";
import logo4 from "../../assets/icons/sony.png";
import logo5 from "../../assets/icons/nokia.png";
import logo6 from "../../assets/icons/social.png";

const BrandIcons = () => {
  return (
    <div className="mt-14">
      <Marquee speed={150} autoFill={true} style={{color:"#403F3F"}}>
        <img className="ml-10" src={logo1} alt=""  />
        <img className="ml-10" src={logo2} alt=""  />
        <img className="ml-10" src={logo6} alt=""  />
        <img className="ml-10" src={logo3} alt=""  />
        <img className="ml-10" src={logo4} alt=""  />
        <img className="ml-10" src={logo5} alt=""  />
      </Marquee>
    </div>
  );
};

export default BrandIcons;
