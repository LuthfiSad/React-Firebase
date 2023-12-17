import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/elements/Button";
import Swal from "sweetalert2";
import { useIsLogin } from "../hooks/useLogin";

export default function RegisterPage() {
  useIsLogin();
  const isLoading = useSelector((state) => state.info.isLoading);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");
  const [typeConfirmPassword, setConfirmTypePassword] = useState("password");
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Password Not Match",
      });
    }
    setDisabled(true)
    dispatch(register(email, password)).then(()=>{
      navigate('/')
    })
    .catch((error)=>{
      console.log(error);
    })
    .then(()=>{
      setPassword("");
      setConfirmPassword("")
      setDisabled(false)
    });;
  };

  return (
    <div className="flex w-full bg-slate-100 min-h-screen justify-center items-center">
      <div className="max-w-sm rounded-lg shadow-md w-full bg-white py-6 px-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl text-blue-600 font-bold">Register</h1>
          <p className="text-sm">Please Register</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label className="text-sm font-bold text-slate-600" htmlFor="email">
              Email :{" "}
            </label>
            <input
              className="text-sm border rounded w-full py-1 px-3 text-slate-600 placeholder:opacity-50 active: outline-slate-500"
              type="text"
              placeholder="example@email.com"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              className="text-sm font-bold text-slate-600"
              htmlFor="password"
            >
              Password :{" "}
            </label>
            <div className="relative flex items-center">
              <input
                className="text-sm border rounded w-full py-1 pl-3 pr-10 text-slate-600 placeholder:opacity-50 active: outline-slate-500"
                type={typePassword}
                placeholder="*****"
                disabled={disabled}
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                type="button"
                onMouseDown={() => setTypePassword("text")}
                onMouseUp={() => setTypePassword("password")}
                className="absolute right-0 px-2 py-1"
              >
                👁️
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-10">
            <label
              className="text-sm font-bold text-slate-600"
              htmlFor="confirmPassword"
            >
              Confirm Password :{" "}
            </label>
            <div className="relative flex items-center">
              <input
                className="text-sm border rounded w-full py-1 pl-3 pr-10 text-slate-600 placeholder:opacity-50 active: outline-slate-500"
                type={typeConfirmPassword}
                placeholder="*****"
                disabled={disabled}
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <button
                type="button"
                onMouseDown={() => setConfirmTypePassword("text")}
                onMouseUp={() => setConfirmTypePassword("password")}
                className="absolute right-0 px-2 py-1"
              >
                👁️
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              isLoading={isLoading}
              width="w-1/2 py-1 px-3"
              className="border-blue-600 hover:text-white bg-transparent hover:bg-blue-600 text-blue-600"
              animated=""
            >
              Register
            </Button>
          </div>
          <p className="text-xs text-center mt-1">
            You have no account ?{" "}
            <Link className="hover:text-blue-600" to={"/"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
