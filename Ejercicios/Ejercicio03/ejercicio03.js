const welcomeMessage = prompt(
  "Bienvenido, ¿Que tipo de pizza desea? pizza personal, pizza mediana o pizza familiar"
);

if (welcomeMessage === "pizza personal") {
  let flavorPizza = prompt(
    "¿Que sabor desea? pollo con champiñones, hawaiana o carnes"
  );
  if (flavorPizza === "pollo con champiñones") {
    let addition = prompt("Escoja una adicion 1)con queso 2)sin queso");
    switch (addition) {
      case "1":
        alert(
          "Su pedido de pizza personal sabor pollo con champiñones, con queso, sera enviada a su direccion"
        );
        break;
      case "2":
        let addition2 = prompt("Escoja otra adicion 1)borde bocadillo 2)salsa");
        switch (addition2) {
          case "1":
            alert(
              "Su pedido de pizza personal sabor pollo con champiñones, sin queso y con borde bocadillo, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pedido de pizza personal sabor pollo con champiñones, sin queso y con salsa, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese una adicion valida");
            break;
        }
        break;
      default:
        alert("Ingrese una adicion valida");
        break;
    }
  } else if (flavorPizza === "hawaiana") {
    let addition = prompt("Escoja una adicion 1)con salami 2)sin salami");
    switch (addition) {
      case "1":
        let addition2 = prompt("Escoja otra adicion 1)sin piña 2)sin jamon");
        switch (addition2) {
          case "1":
            alert(
              "Su pizza personal sabor hawaiana con salami y sin piña, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pizza personal sabor hawaiana con salami y sin jamon, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese una adicion valida");
            break;
        }

        break;
      case "2":
        let addition3 = prompt("Escoja una adicion 1)sin piña 2)sin jamon");
        switch (addition3) {
          case "1":
            alert(
              "Su pizza personal sabor hawaiana sin salami y sin piña, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pizza personal sabor hawaiana sin salami y sin jamon, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese una adicion valida");
            break;
        }
    }
  } else if (flavorPizza === "carnes") {
    let addition = prompt("Escoja una adicion 1)con queso 2)sin salami");
    switch (addition) {
      case "1":
        alert(
          "Su pizza personal sabor carnes con queso, sera enviada a su direccion"
        );
        break;
      case "2":
        let addition2 = prompt("Escoja una adicion 1)con cabano 2)sin cabano");
        switch (addition2) {
          case "1":
            alert(
              "Su pizza personal sabor carnes sin salami y con cabano, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pizza personal sabor carnes sin salami y sin cabano, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese un sabor valido");
            break;
        }
    }
  } else {
    alert("Ingrese un sabor valido");
  }
} else if (welcomeMessage === "pizza mediana") {
  let flavorPizza = prompt("¿Que sabor desea? criolla o mexicana");
  if (flavorPizza === "criolla") {
    let addition = prompt("Escoja una adicion 1)con maiz 2)sin maiz");
    switch (addition) {
      case "1":
        alert(
          "Su pedido de pizza mediana sabor criolla, con maiz, sera enviada a su direccion"
        );
        break;
      case "2":
        let addition2 = prompt(
          "Escoja otra adicion 1)extracarne molida 2)con queso"
        );
        switch (addition2) {
          case "1":
            alert(
              "Su pedido de pizza mediana sabor criolla, sin maiz y con extracarne molida, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pedido de pizza mediana sabor criollsa, sin maiz y con queso, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese una adicion valida");
            break;
        }
        break;
      default:
        alert("Ingrese una adicion valida");
        break;
    }
  } else if (flavorPizza === "mexicana") {
    let addition = prompt("Escoja una adicion 1)con nachos 2)sin nachos");
    switch (addition) {
      case "1":
        let addition2 = prompt(
          "Escoja otra adicion 1)con extraguacamole 2)sin extraguacamoles"
        );
        switch (addition2) {
          case "1":
            alert(
              "Su pizza mediana sabor mexicana con nachos y con extraguacamoles, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pizza mediana sabor mexicana con nachos y sin extraguacamole, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese una adicion valida");
            break;
        }

        break;
      case "2":
        let addition3 = prompt(
          "Escoja una adicion 1)con extraguacamole 2)sin extraguacamole"
        );
        switch (addition3) {
          case "1":
            alert(
              "Su pizza mediana sabor mexicana sin nachos y con extraguacamole, sera enviada a su direccion"
            );
            break;
          case "2":
            alert(
              "Su pizza mediana sabor mexicana sin nachos y sin extraguacamole, sera enviada a su direccion"
            );
            break;
          default:
            alert("Ingrese una adicion valida");
            break;
        }
    }
  } else {
    alert("Ingrese un sabor valido");
  }
} else if (welcomeMessage === "pizza familiar") {
  let flavorPizza = prompt("¿Que sabor desea? vegetariana o pollo y carne");
  if (flavorPizza === "vegetariana") {
    let addition = prompt("Escoja una adicion 1)con queso 2)sin queso");
    switch (addition) {
      case "1":
        alert(
          "Su pizza familiar sabor vegetariana con queso, sera enviada a su direccion"
        );
        break;
      case "2":
        alert(
          "Su pizza familiar sabor vegetariana sin queso, sera enviada a su direccion"
        );
        break;
      default:
        alert("Ingrese una adicion valida");
        break;
    }
  } else if (flavorPizza === "pollo y carne") {
    let addition = prompt(
      "Escoja una adicion 1)con salchicha 2)con champiñones"
    );
    switch (addition) {
      case "1":
        alert(
          "Su pizza familiar sabor pollo y carne con salchicha, sera enviada a su direccion"
        );
        break;
      case "2":
        alert(
          "Su pizza familiar sabor pollo y carne con champiñones, sera enviada a su direccion"
        );
        break;
      default:
        alert("Ingrese una adicion valida");
        break;
    }
  } else {
    alert("Ingrese un sabor valido");
  }
} else {
  alert("Por favor ingrese un tamaño valido");
}
