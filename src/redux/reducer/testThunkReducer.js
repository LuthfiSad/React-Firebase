import { createReducer } from "@reduxjs/toolkit";
import { changeUserThunk } from "../actions";

const testThunkReducer = createReducer("Luthfi", (builder) => {
  builder.addCase(changeUserThunk, (state, action) => {
    return (state === "Luthfi") ? "Bukan Luthfi" : "Luthfi";
  })
})

export default testThunkReducer;