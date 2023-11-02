import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import SwiperSlider from "../home/SwiperSlider";

const Products = () => {
  const [productData, setProductData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const { brandName } = useParams();
  useEffect(() => {
    fetch(`https://tec-zone-shop-server.vercel.app/products/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      });
  }, [brandName]);

  return (
    <div>
      {!productData.length > 0 ? (
        <>
          <div className="h-[80vh] flex justify-center item-center mt-40">
            <h1 className=" text-2xl md:text-3xl lg:text-6xl font-bold">Product is coming soon.....</h1>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-6xl mx-auto p-5 mt-10 ">
            <div className="mt-10">
              <SwiperSlider></SwiperSlider>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-10">
              {productData.map((product) => (
                <ProductsCard
                  key={product._id}
                  product={product}
                ></ProductsCard>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
