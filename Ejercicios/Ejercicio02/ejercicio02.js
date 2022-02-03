let nombre = prompt("Ingresa tu nombre");
let palabra = parseInt(prompt(nombre + " Digite alguna de estas palabras a traducir 1)casa, 2)mesa, 3)perro, 4)gato"));
alert(typeof palabra);

switch (palabra) {
  case 1:
    alert("house");
    break;

    case 2:
        alert("Table")
        break;

        case 3:
            alert("Dog")
            break;

            case 4:
                alert("cat")
                break;

  default:
    alert("Eleccion invalida");
    break;
}

