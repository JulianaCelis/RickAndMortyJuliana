import React, { useState } from "react";
import julianaImage from "../Imagenes/Juliana.jpg";
import style from "./About.module.css";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSource = isHovered
    ? "https://i1.sndcdn.com/artworks-000230699191-uvmbrr-t500x500.jpg"
    : julianaImage;

  return (
    <div className={style.aboutContainer}>
      <div
        className={style.imageContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageSource} alt="Imagen" className={style.image} />
        <img
          src="https://i.imgur.com/YWx1CJG.png"
          alt="Logo"
          className={style.logo}
        />
      </div>
      <div className={style.textContent}>
        <h1>Sobre mí</h1>
        <p>Nombre: Juliana Celis</p>
        <p>Estudiante de Henry de WebFT40</p>
        <p>Estudiante de Desarrollo de Software</p>
        <p>Edad: 22 años</p>
        <p>País: Colombia</p>
      </div>
    </div>
  );
}

