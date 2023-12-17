import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./reducer/infoReducer";
import testThunkReducer from "./reducer/testThunkReducer";

const store = configureStore({
  reducer: {
    info: infoReducer,
    user: testThunkReducer
  }
});


// console.log("oncreate store : ", store.getState());

// store.subscribe(() => {
//   console.log("store changed : ", store.getState());
// })

// store.dispatch(addToCart({ id: 1, qty: 1 }));
// store.dispatch(addToCart({ id: 1, qty: 1 }));
// store.dispatch(addToCart({ id: 2, qty: 1 }));
// store.dispatch(login());
export default store;