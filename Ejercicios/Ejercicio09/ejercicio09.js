const edad =prompt("Bienvenido ingrese su edad");

if (edad >= 18) {
 let genero = prompt("¿Eres hombre o mujer?")
 if (genero === "mujer") {
  let edad = prompt("escoge una opcion 1)Mayor de 25 o 2) Menor de 25") 
  switch (edad) {
      case '1':
          alert("Pagas 25.000")
          break;
          case '2':
          alert("Pagas 20.000")
          break;
      default:
          alert("Opcion invalida")
          break;
  }
  

 }else if (genero === "hombre"){
     let edad =prompt("escoge una opcion 1)Mayor de 24 o 2)Menor de 24")
     switch (edad) {
         case '1':
             alert("Pagas 30.000")
             break;
             case '2':
             alert("Pagas 25.000")
             break;
     
         default:
             alert("Opcion invalida")
             break;
     }
 }

} else {
    alert("Debes ser mayor de 18 para ingresar")
}
