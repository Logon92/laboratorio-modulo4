function saludar () {

//Leer los valores
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;

//Concatenar los valores
const resultado = `¡Hola ${nombre} ${apellido}!`;

//Mostrar el resultado
document.getElementById("resultado").innerHTML = resultado;
}

const botonSaludar = document.getElementById("saludar");
botonSaludar.addEventListener("click", saludar)