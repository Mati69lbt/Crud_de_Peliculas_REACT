import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState([]);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    //traer las peliculas del localstorage
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    // retornar peliculas
    return peliculas;
  };

  const borrarPeli = (id) => {
    // conseguir peliculas de la funcion ya echa
    let peliculas_almacenadas = conseguirPeliculas();

    // filtrar esas peliculas para que elimine del array la que no quiero
    // explicacion: el metodo filter va a guardar en una nueva variable, todas las peliculas que tengan diferente id al que pasamos por parametro
    let peliculas_filtradas = peliculas_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    // Actualizar estado deli listado
    setListadoState(peliculas_filtradas);

    // Actualizar el localStorage
    localStorage.setItem("pelis", JSON.stringify(peliculas_filtradas));
  };

  const estilos = {
    color: "red",
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article className="peli-item" key={peli.id}>
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Eliminar
              </button>
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2 style={estilos}>NO hay peliculas, no hay! </h2>
      )}
    </>
  );
};

export default Listado;
