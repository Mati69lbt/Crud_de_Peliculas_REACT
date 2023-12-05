import React, { useState } from "react";

const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //crear estado y actualizarlo
    setBusqueda(e.target.value);

    // el listado completo de las peliculas

    // Filtrar para buscar concidencias
    let pelis_encontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    // si no hay busqueda, devolver lo que hay guardado en el local storage
    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    // Actualizar estado del Listado pricipal con lo que logramos filtrar
    setListadoState(pelis_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscar: {busqueda}</h3>
      {noEncontrado == true && busqueda.length > 1 && (
        <span className="no-encontrado">Sin Coincidencias</span>
      )}
      <form action="">
        <input
          type="text"
          name="busqueda"
          id="search_field"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
