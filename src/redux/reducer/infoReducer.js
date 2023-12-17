import { createReducer } from "@reduxjs/toolkit";
import {
  changePopup,
  changeIsLogin,
  changeUser,
  changeIsLoading,
  changeNotesFirebase,
  changeIdUpdate
} from "../actions";

const userLocal = JSON.parse(localStorage.getItem("user") || "null");

window.addEventListener("storage", (e) => {
  // return console.log(e.newValue);
  if (e.key === "user"&& e.newValue) {
    localStorage.removeItem("user");
    window.location.reload();
  }
});

const initialState = {
  isLogin: userLocal ? true : false,
  popup: false,
  user: userLocal ? userLocal : {},
  isLoading: false,
  notes: [],
  idUpdateMode: "",
};

const infoReducer = createReducer(initialState, (builder) => {
  builder.addCase(changePopup, (state, action) => {
    return {
      ...state,
      popup: action.payload.value,
    };
  });
  builder.addCase(changeIsLogin, (state, action) => {
    return {
      ...state,
      isLogin: action.payload.value,
    };
  });
  builder.addCase(changeUser, (state, action) => {
    return {
      ...state,
      user: action.payload.value,
    };
  });
  builder.addCase(changeIsLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.payload.value,
    };
  });
  builder.addCase(changeNotesFirebase, (state, action) => {
    return {
      ...state,
      notes: action.payload.value,
    };
  });
  builder.addCase(changeIdUpdate, (state, action) => {
    return {
      ...state,
      idUpdateMode: action.payload.value,
    };
  });
});

export default infoReducer;
