import Banner from "./Banner";
import BrandIcons from "./BrandIcons";
import Brands from "./Brands";
import Services from "./Services";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner></Banner>
        <BrandIcons></BrandIcons>
      <div className="max-w-6xl mx-auto p-5">
        <Brands></Brands>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
