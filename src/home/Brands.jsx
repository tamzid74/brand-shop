import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div>
      <h1 className="md:text-6xl text-2xl text-center font-extrabold mt-10">
        Our brands
      </h1>
      <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
