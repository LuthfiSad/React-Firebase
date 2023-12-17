import { getDatabase, onValue, ref, push, update } from "firebase/database";
import app from "../config/firebase";
import Swal from "sweetalert2";
import { changeNotesFirebase } from "../redux/actions";

const db = getDatabase(app);

export const addNotes = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    push(ref(db, "notes/" + data.uid), {
      title: data.title,
      date: data.date,
      content: data.content,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Notes Added Success",
        });
        resolve();
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
        reject(error);
      });
  });
};

export const getNotes = (uid) => (dispatch) => {
  const starCountRef = ref(db, "notes/" + uid);
  onValue(starCountRef, (snapshot) => {
    const data = [];
    if (snapshot.exists()) {
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          ...snapshot.val()[key],
        });
      });
    }
    dispatch(changeNotesFirebase({ value: data }));
  });
};

export const updateNotes = (data) => (dispatch) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    const updates = {};
    updates["notes/" + data.uid + "/" + data.id] = {
      title: data.title,
      date: data.date,
      content: data.content,
    };
    update(ref(db), updates)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Notes Updated Success",
        });
        resolve();
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
        reject(error);
      });
  });
}

export const deleteNotes = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const updates = {};
    updates["notes/" + data.uid + "/" + data.id] = null;
    update(ref(db), updates)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Notes Deleted Success",
        });
        resolve();
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
        reject(error);
      });
  });
}