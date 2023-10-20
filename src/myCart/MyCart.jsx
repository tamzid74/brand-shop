import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";


const MyCart = () => {
    const cartData = useLoaderData()
    return (
        <div className="max-w-6xl mx-auto p-5 mt-10">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {cartData.map((cart) => (
                <MyCartCard
                  key={cart._id}
                  cart={cart}
                ></MyCartCard>
              ))}
            </div>
          </div>
    );
};

export default MyCart;