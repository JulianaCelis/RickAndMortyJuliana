import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="Busca un personaje..."
        onChange={handleChange}
        value={id}
      />
      <button
        className={style.button}
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
  
}

