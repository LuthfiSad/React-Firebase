import { useSelector, useDispatch } from "react-redux"
import { changeUserThunk } from "../redux/actions";

export default function UserThunkPage() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const handleChangeUser = () => {
    return (dispatch) => {
      setTimeout(() => {
        return dispatch(changeUserThunk("Bukan Luthfi"))
      }, 2000)
    }
  }

  return (
    <div className="flex justify-center">
      <div>
      <p className="text-center">Ini Nama User nya : {user}</p>
      <button onClick={() => dispatch(handleChangeUser())} className="border rounded px-1 bg-slate-200">ubah user menggunakan thunk</button>
      </div>
    </div>
  )
}
