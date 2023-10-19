import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;