 const GuardarEnStorage = (peli) => {
  // Conseguir los elementos que ya tenemos en LocalStorage
  let pelisGuardadas = JSON.parse(localStorage.getItem("pelis"));

  // Comprobar si es un Array
  if (Array.isArray(pelisGuardadas)) {
    // Añadir dentro del array un elemento nuevo
    pelisGuardadas.push(peli);
  } else {
    // Si no lo era creamos un array nuevo y añadimos la nueva película
    pelisGuardadas = [peli];
  }
  // Guardar en el LocalStorage
  localStorage.setItem("pelis", JSON.stringify(pelisGuardadas));

  //Devolver Objeto
  return peli;
};

export default GuardarEnStorage;
