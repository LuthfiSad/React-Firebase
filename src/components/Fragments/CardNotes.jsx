export default function CardNotes({ title, date, content, id, handleUpdate, handleRemove }) {
  const convertTimeToDate = (time) => {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    const formattedDate = new Date(time).toLocaleDateString('id-ID', options);
    return formattedDate;
  };

  

  return (
    <div onClick={() => handleUpdate(id)} className="border p-3 rounded-lg shadow-md cursor-pointer border-black relative">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-xs font-medium">{convertTimeToDate(date)}</p>
      <p className="text-sm">{content}</p>
      <button onClick={(e) => handleRemove(e, id)} className="bg-red-500 text-white px-2 py-1 rounded-2xl flex items-center -top-2 -right-2 justify-center absolute w-7 h-7">
        x
      </button>
    </div>
  );
}
