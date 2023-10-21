import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (media) => {
      media()
        .then((result) => {
          console.log(result.user);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          navigate(`/`)
        })
        .catch((error) => {
          console.log(error.message);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire(error.message);
        });
    };
    return (
      <>
        <div className="divider">Continue With</div>
        <div>
          <button
            onClick={() => handleLogin(googleLogin)}
            className=" btn btn-sm btn-info btn-outline w-full rounded-lg font-bold flex items-center"
          >
            <BsGoogle></BsGoogle>Login with Google
          </button>
        </div>
      </>
    );
};

export default SocialLogin;