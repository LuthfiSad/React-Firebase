import { createAction } from "@reduxjs/toolkit";

const changePopup = createAction("CHANGE_POPUP");
const changeIsLogin = createAction("CHANGE_IS_LOGIN");
const changeUser = createAction("CHANGE_USER");
const changeUserThunk = createAction("CHANGE_USER_THUNK");
const changeIsLoading = createAction("CHANGE_IS_LOADING");
const changeNotesFirebase = createAction("CHANGE_NOTES_FIREBASE");
const changeIdUpdate = createAction("CHANGE_ID_UPDATE");

export { changePopup, changeIsLogin, changeUser, changeIsLoading, changeUserThunk, changeNotesFirebase, changeIdUpdate };