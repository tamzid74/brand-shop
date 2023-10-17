import Banner from "./Banner";
import Brands from "./Brands";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner></Banner>
      <div className="max-w-6xl mx-auto p-5">
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
