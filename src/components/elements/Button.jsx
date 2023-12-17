export default function Button({ type="button" ,children, className="text-white bg-blue-600", animated="hover:scale-105", width="px-2 py-1", onclick=() => {}, isLoading }) {
  if (isLoading) {
    return <button type={type} disabled className={`border cursor-not-allowed text-sm select-none rounded bg-slate-400 ${width}`}>Loading...</button>
  }
  return <button type={type} onClick={onclick} className={`border text-sm select-none rounded ${width} ${className} ${animated}`}>{children}</button>
}