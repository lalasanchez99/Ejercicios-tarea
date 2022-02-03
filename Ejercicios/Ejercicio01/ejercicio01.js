let nombre = document.getElementById("nombre");
let datos  = document.getElementById("datos");
let sueldo = document.getElementById("sueldo")

const nombreUsuario = () => {
    let nombreUsuario = prompt("Ingresa tu nombre");
    let sueldoUsuario = parseInt(prompt("Ingresa tu sueldo"));
    nombre.innerHTML = (`${nombreUsuario} tu suelo es `);
    sueldo.innerHTML = (`${sueldoUsuario} `);
    console.log(nombre);
  };

datos.onclick = function () {
  nombreUsuario();
};
