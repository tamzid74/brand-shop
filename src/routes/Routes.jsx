import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../layout/Error";
import Home from "../home/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../myCart/MyCart";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import UpdateProduct from "../pages/UpdateProduct";
import Products from "../pages/Products";

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
        path: "/updateProduct",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
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
