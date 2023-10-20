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
import PrivateRoutes from "./PrivateRoutes";

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
        element:<PrivateRoutes> <AddProduct></AddProduct></PrivateRoutes>,
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
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
