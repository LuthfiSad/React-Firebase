import { useEffect } from "react";
import Button from "../elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "../../services/notes.service";

export default function FormNotes({ handleCancelUpdate, handleSubmit, title, content, handleChangeTitle, handleChangeContent, idUpdateMode }) {
  const uid = useSelector((state) => state.info.user.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes(uid));
  }, [])

  return (
    <form className="flex flex-col gap-3 p-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Title</label>
        <input
          placeholder="Masukan judul"
          type="text"
          value={title}
          onChange={(e) => handleChangeTitle(e)}
          className="border rounded text-slate-600 py-1 px-2 text-sm placeholder:opacity-50 active: outline-slate-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Content</label>
        <textarea
          placeholder="Masukan konten"
          value={content}
          onChange={(e) => handleChangeContent(e)}
          className="border h-32 rounded text-slate-600 text-sm py-1 px-2 placeholder:opacity-50 active: outline-slate-500"
        />
      </div>
      <div className="flex justify-center gap-2">
        {idUpdateMode && (
          <Button
            onclick={() => handleCancelUpdate()}
            width="w-1/2 py-1"
            className="hover:bg-red-500 bg-transparent border-red-500 text-red-500 hover:text-white"
          >
            Batal
          </Button>
        )}

        <Button
          type="submit"
          width="w-1/2 py-1"
          className="hover:bg-blue-500 bg-transparent border-blue-500 text-blue-500 hover:text-white"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
