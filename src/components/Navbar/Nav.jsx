import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <Link to="/home" className={`${style.link} ${style.whiteContainer}`}>
        HOME
      </Link>
      <Link to="/favorites" className={`${style.link} ${style.whiteContainer}`}>
        FAVORITOS <span className={style.heart}>❤️</span>
      </Link>
      <div className={`${style.link} ${style["about-link"]} ${style.whiteContainer}`}>
        <Link to="/about">Sobre mí</Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
      <button className={style.btn} onClick={props.out}>
        LOGOUT
      </button>
    </div>
  );
}
