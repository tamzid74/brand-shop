import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brandName, price, type, rating, shortDescription, photo } =
    product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const type = form.type.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const updateProduct = {
      photo,
      name,
      brandName,
      price,
      type,
      shortDescription,
      rating,
    };
    console.log(updateProduct);

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl text-center font-extrabold mb-5 border-b-2 p-2">
        Update Product
      </h1>
      <form onSubmit={handleUpdate}>
        {/* {row-1} */}
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image URL"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* {row-2} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Name"
                name="brandName"
                defaultValue={brandName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* {row-3} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Type"
                name="type"
                defaultValue={type}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* {row-4} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Short description"
                name="shortDescription"
                defaultValue={shortDescription}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                defaultValue={rating}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-success btn-sm w-full mt-10"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
