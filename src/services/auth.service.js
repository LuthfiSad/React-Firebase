import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import { changeIsLoading, changeIsLogin, changeUser } from "../redux/actions";
import Swal from "sweetalert2";

const auth = getAuth(app);

export const login = (email, password)=>{
  return (dispatch) => {
    return new Promise((resolve, reject)=>{
      dispatch(changeIsLoading({value:true}));
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: "Login Success",
        });
        dispatch(changeIsLogin({value:true}));
        const data = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken,
        }
        dispatch(changeUser({value:data}));
        localStorage.setItem("user", JSON.stringify(data));
        resolve()
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
        reject(error)
      })
      .then(()=>dispatch(changeIsLoading({value:false})));
    })
  }
}

export const register = (email, password)=>(dispatch)=>{
  return new Promise((resolve, reject)=>{
    dispatch(changeIsLoading({value:true}));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Register Success",
        });
        resolve()
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
        reject(error)
      })
      .then(()=>dispatch(changeIsLoading({value:false})));
  })
}
