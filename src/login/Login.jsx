/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import SocialLogin from "../social/SocialLogin";



const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setEmailError("");
    setPassError("");

    if (password.length < 6) {
      setPassError("*Invalid email and Password");
      return;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/.test(password)
    ) {
      setPassError(
        "*password should contain at least an uppercase, a lowercase,one special character and a number"
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
        setEmailError("*Invalid Email and Password");
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
              {emailError && (
                <p className="text-sm text-red-600">{emailError}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-4 right-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              {passError && <p className="text-sm text-red-600">{passError}</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary btn-outline">Login</button>
            </div>
            <div>
              <p className="text-center">
                Don't you have account?
                <Link to="/registration" className="btn-link">
                  Register
                </Link>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
