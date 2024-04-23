
let contador:number = 0

const elementoContador = document.getElementById("contador")

//Botón siguiente
const botonSiguiente = document.getElementById("siguiente");
  if (botonSiguiente instanceof HTMLButtonElement && botonSiguiente !== null && botonSiguiente !== undefined)(
    botonSiguiente.addEventListener("click", function() {
        contador++;
        
      if (elementoContador instanceof HTMLDivElement && elementoContador !== null && elementoContador !== undefined){
          elementoContador.innerHTML = `${contador}`.padStart(2, '0');
      }
    })
  ) 

//Botón anterior
  const botonAnterior = document.getElementById("anterior");
  if (botonAnterior instanceof HTMLButtonElement && botonAnterior !== null && botonAnterior !== undefined)(
    botonAnterior.addEventListener("click", function() {
        contador--;
        
      if (elementoContador instanceof HTMLDivElement && elementoContador !== null && elementoContador !== undefined){
          elementoContador.innerHTML = `${contador}`.padStart(2, '0');
      }
    })
  ) 

//Botón reset
  const botonReset = document.getElementById("reset");
  if (botonReset instanceof HTMLButtonElement && botonReset !== null && botonReset !== undefined)(
    botonReset.addEventListener("click", function() {
        contador = 0;
        
      if (elementoContador instanceof HTMLDivElement && elementoContador !== null && elementoContador !== undefined){
          elementoContador.innerHTML = `${contador}`.padStart(2, '0');
      }
    })
  ) 

//Cambiar turno
const cambioT = document.getElementById("newnmb")

  const botonCambio = document.getElementById("newnumber");
  if (botonCambio instanceof HTMLButtonElement && botonCambio !== null && botonCambio !== undefined)(
    botonCambio.addEventListener("click", function() {

      if ( cambioT instanceof HTMLInputElement && cambioT !== null && cambioT !== undefined){
      contador = parseInt (cambioT.value);
      }
      if (elementoContador instanceof HTMLDivElement && elementoContador !== null && elementoContador !== undefined){
          elementoContador.innerHTML = `${contador}`.padStart(2, '0');
      }
    })
  ) 