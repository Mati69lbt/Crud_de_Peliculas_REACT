import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
      {/* <!-- Cabecera --> */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
      </header>

      {/* <!-- Barra de Navegacion --> */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* <!-- Contenido Principal --> */}
      <section className="content">
        {/* <!-- aqui van las Pelis --> */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/* <!-- Barra Lateral --> */}
      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
        <Crear setListadoState={setListadoState} />
      </aside>

      {/* <!-- Pie de Pagina --> */}
      <footer className="footer">
        <p>
          &copy; Todos los derechos reservados.
          <a href="https://matiasdelgado.onrender.com/" target="_blank">
            matiasdelgado.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
