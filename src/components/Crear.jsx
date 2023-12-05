import React, { useState } from "react";
import GuardarEnStorage from "../helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir Película";

  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });

  //desestructura pelistate
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    // conseguir datos del formulario
    let target = e.target;
    let nuevoTitulo = target.titulo.value;
    let nuevaDescripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
    };

    // guardar en el estado
    setPeliState(peli);

    // Actualizar estado
    setListadoState((peliculas) => {
      return [...peliculas, peli];
    });
    //Guardar en el LocalStorage
    GuardarEnStorage(peli);
  };

  return (
    <div className="add">
      <h3 className="title">
        <u>{tituloComponente}</u>
      </h3>
      <strong>
        {titulo && descripcion && `Has creado la pelicula: ${titulo}`}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripcion"
        ></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
