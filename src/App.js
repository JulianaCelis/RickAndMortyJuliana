import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import style from "./App.module.css";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate(); 
  const [access, setAccess] = useState(false);
  const EMAIL = "juliana0celis@gmail.com";
  const PASSWORD = "m2henry";

  function logout() {
    setAccess(false);
  }
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(dato) {
    axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((respuesta) => {
        if (respuesta.data.name) {
          const alreadyExists = characters.some((character) => character.id === respuesta.data.id);
          if (alreadyExists) {
            window.alert("¡El personaje ya existe!");
            return;
          }
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
        } 
      })
      .catch((err) => window.alert("¡No hay personajes con este ID!"));
  }
  

  function onClose(id) {
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  const [characters, setCharacters] = useState([]); 

  const location = useLocation();

  return (
    <div className={style.background}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />}
      <div className={style.content}>
        <Routes>
          <Route
            path="/home"
            element={<Home characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Form login={login} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
