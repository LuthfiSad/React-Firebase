import Button from "./components/elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsLogin, changeUser } from "./redux/actions";
import Swal from "sweetalert2";

export default function LinkButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        dispatch(changeIsLogin({ value: false }));
        dispatch(changeUser({ value: {} }));
        navigate("/");
        Swal.fire({
          text: "Logout success",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="flex flex-wrap gap-2 mt-5">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Link to="/thunk">
          <Button>UserThunk</Button>
        </Link>
        <Button
          onclick={() => handleLogout()}
          className="bg-red-500 text-white"
        >
          Logout
        </Button>
      </div>
  )
}
