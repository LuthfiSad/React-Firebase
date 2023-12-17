import { useState } from "react";
import { useIsNotLogin } from "../hooks/useLogin";
import { useDispatch, useSelector } from "react-redux";
import CardNotes from "../components/Fragments/cardNotes";
import FormNotes from "../components/Fragments/FormNotes";
import Swal from "sweetalert2";
import { changeIdUpdate } from "../redux/actions";
import { addNotes, deleteNotes, updateNotes } from "../services/notes.service";

export default function DashboardPage() {
  const notes = useSelector((state) => state.info.notes);
  const uid = useSelector((state) => state.info.user.uid);
  const idUpdateMode = useSelector((state) => state.info.idUpdateMode);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      return Swal.fire({
        icon: "error",
        title: "Judul Tidak Boleh Kosong",
      });
    }
    if (!content) {
      return Swal.fire({
        icon: "error",
        title: "Konten Tidak Boleh Kosong",
      });
    }
    const sameTitle = notes.filter((note) => note.title.toLowerCase() === title.toLocaleLowerCase() && note.id !== idUpdateMode);
    if (sameTitle.length > 0) {
      return Swal.fire({
        icon: "error",
        title: "Judul Tidak Boleh Sama",
      });
    }
    if (idUpdateMode) {
      const note = notes.find((note) => note.id === idUpdateMode);
      dispatch(
        updateNotes({ title, content, uid, id: note.id, date: note.date })
      ).then(() => {
        setTitle("");
        setContent("");
        dispatch(changeIdUpdate({ value: "" }));
      });
    } else {
      dispatch(
        addNotes({ title, content, uid, date: new Date().getTime() })
      ).then(() => {
        setTitle("");
        setContent("");
      });
    }
  };

  const handleUpdate = (id) => {
    dispatch(changeIdUpdate({ value: id }));
    notes.find((note) => {
      if (note.id === id) {
        setTitle(note.title);
        setContent(note.content);
      }
    });
  };

  const handleRemove = (e, id) => {
    e.stopPropagation();
    Swal.fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNotes({ uid, id }));
      }
    });
  };

  const handleCancelUpdate = () => {
    dispatch(changeIdUpdate({ value: "" }));
    setTitle("");
    setContent("");
  };

  useIsNotLogin();
  return (
    <div className="flex flex-col items-center px-4 py-5 justify-center">
      <div className="max-w-md w-full rounded-lg border-2 border-blue-500">
        <h2 className="text-2xl font-bold py-3 text-center text-white bg-blue-500">
          Simple Notes
        </h2>
        <FormNotes
          handleSubmit={handleSubmit}
          handleCancelUpdate={handleCancelUpdate}
          title={title}
          content={content}
          handleChangeTitle={handleChangeTitle}
          handleChangeContent={handleChangeContent}
          idUpdateMode={idUpdateMode}
        />
      </div>
      <hr className="my-3 w-full max-w-6xl" />
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl mb-5 font-bold">List Notes</h2>
        <div className="flex flex-col gap-3">
          {notes.map((note) => (
            <CardNotes
              handleUpdate={handleUpdate}
              handleRemove={handleRemove}
              id={note.id}
              key={note.id}
              title={note.title}
              date={note.date}
              content={note.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
