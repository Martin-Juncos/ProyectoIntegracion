import style from "./SearchBar.module.css";

export default function SearchBar({handlerChange, handlerSubmit}) {

  return (
  <div className={style.container}>
    <form onSubmit={handlerSubmit} >
      <input type="search" onChange={(event)=>handlerChange(event.target.value)} />
      <button>Buscar</button>
    </form>
  </div>
  );
}
