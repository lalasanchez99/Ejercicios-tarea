let name = prompt("Ingrese su nombre")
alert ("Bienvenid@ " + name)
let option = prompt(name + " ¿desea consultar su saldo? si, no")
if (option === "si") {
    alert("su saldo es 1.000.000")
    const saldo = parseInt('1.000.000')
    let option2 = prompt("¿Desea comprar producto? si, no") 
    if (option2 === "si") {
      let value = prompt("Ingrese valor de producto")  
      if (value <= saldo ) {
          alert("producto agregado con exito")
      }
    }else if(option2 === "no"){
        alert("Vuelva pronto")
    }
    
}else if(option === "no"){
   let option2 = prompt("¿Desea comprar producto? si, no") 
   if (option2 === "si") {
    let value = prompt("Ingrese valor de producto")  
    if (value <= saldo ) {
        alert("producto agregado con exito")
    }
  }else if(option2 === "no"){
      alert("Vuelva pronto")
  }
}













    /*alert("su saldo es 1.000.000")
    let option2 = prompt("¿Desea comprar producto? si, no")
    switch (option2) {
        case "si":
            let money = parseInt(prompt("Ingrese valor de producto"))
            switch (money) {
                case '<=1000000':
                    alert("Producto agregado al carrito con exito")                   
                    break;          
                default:
                    alert("Saldo insuficiente")
                    break;
          }
            break;
        default:
            alert("Vuelva pronto :)")
            break;
     }

 } else if (option === "no") {
   let option2 = prompt("¿Desea comprar producto? si, no")
   switch (option2) {
       case "si":
           let money = prompt("Ingrese valor de producto <=1000000")
           switch (money) {
               case '<=1000000':
                   alert("Producto agregado al carrito con exito")                   
                   break;          
               default:
                   alert("Saldo insuficiente")
                   break;
         }
           break;
       default:
           alert("Vuelva pronto :)")
           break;
   }
   }
    else{
    alert("vuelva pronto :)")
}*/