import React, { useRef, useState } from "react";
import GuardarEnStorage from "../helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir Película";

  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });

  //desestructura pelistate
  const { titulo, descripcion } = peliState;

  const formRef = useRef();

  const handleReset = () => {
    formRef.current.reset();
  };

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
    // setPeliState(peli);

    //chatgpt
    // actualizar el estado con los nuevos valores
    setPeliState({
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
    });

    // Actualizar estado
    setListadoState((peliculas) => {
      return [peli, ...peliculas];
    });
    //Guardar en el LocalStorage
    GuardarEnStorage(peli);

    // Limpiar el formulario después de guardar
    handleReset();
  };

  return (
    <div className="lateral">
      <h3 className="title">
        <u>{tituloComponente}</u>
      </h3>
      <strong>
        {titulo && descripcion && `Has creado la pelicula: ${titulo}`}
      </strong>
      <form onSubmit={conseguirDatosForm} ref={formRef}>
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
