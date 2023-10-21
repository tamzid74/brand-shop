import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedProduct = useLoaderData();
  const [carts, setCarts] = useState(loadedProduct);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tec-zone-shop-server.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              setCarts(carts.filter((item) => item._id !== _id));
              //   console.log(setCarts(remaining));
            }
          });
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto p-5 mt-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {carts.map((cart) => (
          <MyCartCard
            key={cart._id}
            cart={cart}
            handleDelete={handleDelete}
          ></MyCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
