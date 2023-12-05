import React from "react";

const Editar = ({ peli, conseguirPeliculas, setListadoState, setEditar }) => {
  const titulo_componente = "Editar Película";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    // conseguir el target del evento
    let target = e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const peliculas_almacenadas = conseguirPeliculas();
    const index = peliculas_almacenadas.findIndex((peli) => peli.id === id);

    //crear objeto con ese index
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    peliculas_almacenadas[index] = peli_actualizada;

    // guardar el nuevo array en el localstorage
    localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

    //actualizar el estado
    setListadoState(peliculas_almacenadas);
    setEditar();
  };

  return (
    <div className="edicion">
      <h3 className="title">
        {titulo_componente}: {peli.titulo}
      </h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input type="text" name="titulo" defaultValue={peli.titulo} />
        <textarea name="descripcion" defaultValue={peli.descripcion}></textarea>
        <input type="submit" value="Actualizar" className="editar" />
      </form>
    </div>
  );
};

export default Editar;
