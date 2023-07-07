import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import style from "./Favorites.module.css";
import Card from "../Cards/Singular/Card";

export default function Favorites() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  const [aux, setAux] = useState(false); // Agregamos el estado local aux

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux); // Cambiamos el valor del estado local aux
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={style.container}>
      <div>
        <label htmlFor="orderSelect">Ordenar:</label>
        <select id="orderSelect" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div>
        <label htmlFor="filterSelect">Filtrar por género:</label>
        <select id="filterSelect" onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.characters}>
        {allCharacters.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            status={char.status}
            image={char.image}
            origin={char.origin.name}
            aux={aux}
          />
        ))}
      </div>
    </div>
  );
}
