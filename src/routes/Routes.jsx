import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../layout/Error";
import Home from "../home/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../myCart/MyCart";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/products/:brandName",
        element: <Products></Products>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader:()=>fetch('http://localhost:5000/carts')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
