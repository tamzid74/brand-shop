import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/icons/rsz_1rsz_responsive.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky inset-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 z-[5] shadow bg-base-100 p-2"
          >
            {navList}
          </ul>
        </div>
        <div className="flex items-center flex-wrap">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link
            to="/"
            className=" font-Pacifico normal-case text-sm md:text-3xl"
          >
            Tec zone Shop
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end z-10">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user ? <img src={user.photoURL} /> : ""}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{user && <span>{user?.displayName}</span>}</li>
            <li>{user && <span>{user.email}</span>}</li>
          </ul>
        </div>
        {user?.email ? (
          <button onClick={logOut} className="btn btn-outline btn-sm">
            Sign out
          </button>
        ) : (
          <Link className="btn btn-outline btn-sm" to="/login">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
