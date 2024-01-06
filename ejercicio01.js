//Utilizando el lenguaje JavaScript desarrollar un programa que dé solución a los siguientes problemas: 
//1. Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas según la siguiente
//tabla:  Tabla 1  Área y perímetro de figuras plana

export const ejecutarEjercicio01 = (() => {
  
let operaciones = {
  0: "operacion",
  1: "AREA",
  2: "PERIMETRO",
}
let figuras = {
  0: "figura",
  1: "CUADRADO",
  2: "TRIANGULO",
  3: "CIRCULO",
  4: "RECTANGULO",
}

let opeacion
let figura

validarOperacion()
validarFigura()

function validarOperacion() {
  opeacion  = prompt(`Por favor, indique una opción:
  1. AREA
  2. PERIMETRO
  `);
  if (opeacion <= 0 || opeacion >2) {
    console.log("No se ha seleccionado una opción válida");
    alert("No se ha seleccionado una opción válida")
    validarOperacion()
  }
}
function validarFigura() {
    figura  = prompt(`Por favor, indique una opción:
                    1. CUADRADO
                    2. TRIANGULO
                    3. RECTANGULO
                    4. CIRCULO
                      `);
  if (figura <= 0 || figura >4) {
    console.log("No se ha seleccionado una opción válida");
    alert("No se ha seleccionado una opción válida")
    validarFigura()
  }
}
  
console.log(
  `Desea saber el AREA o PERIMETRO de una figura?
  1. AREA
  2. PERIMETRO
  USTED SELECCIONO: ${operaciones[opeacion]}`)


console.log(`por favor, indique la figura que desea:
  1. CUADRADO
  2. TRIANGULO
  3. RECTANGULO
  4. CIRCULO
  USTED SELECCIONO: ${figuras[figura]}`)

//variables a uitilizar
let ladoA
let ladoBase
let ladoC
let altura
let radio

let respuestaTexto = ""

if (opeacion == 1 && figura == 1) {
  ladoBase = prompt("Ingrese la medida del lado del cuadrado")
  console.log(`El area del cuadrado es: ${ladoBase * ladoBase}`)
  alert(`El area del cuadrado es: ${ladoBase * ladoBase}`)
  return "El area del cuadrado es: " + ladoBase * ladoBase
}
if (opeacion == 1 && figura == 2) {
  ladoBase = prompt("Ingrese la medida del lado del triangulo")
  altura = prompt("Ingrese la medida de la altura del triangulo")
  console.log(`El area del triangulo es: ${(ladoBase * altura) / 2}`)
  alert(`El area del triangulo es: ${(ladoBase * altura) / 2}`)
  return "El area del triangulo es: " + (ladoBase * altura) / 2
}
if (opeacion == 1 && figura == 3) {
  ladoBase = prompt("Ingrese la medida del lado del rectangulo")
  altura = prompt("Ingrese la medida de la altura del rectangulo")
  console.log(`El area del rectangulo es: ${ladoBase * altura}`)
  alert(`El area del rectangulo es: ${ladoBase * altura}`)
}if (opeacion == 1 && figura == 4) {
  radio = prompt("Ingrese la medida del radio del circulo")
  console.log(`El area del circulo es: ${Math.PI * (radio * radio)}`)
  alert(`El area del circulo es: ${Math.PI * (radio * radio)}`)
  return "El area del circulo es: " + Math.PI * (radio * radio)
}if (opeacion == 2 && figura == 1) {
  ladoBase = prompt("Ingrese la medida del lado del cuadrado")
  console.log(`El perimetro del cuadrado es: ${ladoBase * 4}`)
  alert(`El perimetro del cuadrado es: ${ladoBase * 4}`)
  return "El perimetro del cuadrado es: " + ladoBase * 4
}if (opeacion == 2 && figura == 2) {
  ladoBase = prompt("Ingrese la medida del lado del triangulo")
  ladoC = prompt("Ingrese la medida del lado del triangulo")
  ladoA = prompt("Ingrese la medida del lado del triangulo")
  console.log(`El perimetro del triangulo es: ${ladoBase + ladoC + ladoA}`)
  alert(`El perimetro del triangulo es: ${ladoBase + ladoC + ladoA}`)
  return "El perimetro del triangulo es: " + ladoBase + ladoC + ladoA
}if (opeacion == 2 && figura == 3) {
  ladoBase = prompt("Ingrese la medida del lado del rectangulo")
  ladoC = prompt("Ingrese la medida del lado del rectangulo")
  console.log(`El perimetro del rectangulo es: ${((ladoBase + ladoC)*2)}`)
  alert(`El perimetro del rectangulo es: ${((ladoBase + ladoC)*2)}`)
  return "El perimetro del rectangulo es: " + ((ladoBase + ladoC)*2)
}
if (opeacion == 2 && figura == 4) {
  radio = prompt("Ingrese la medida del radio del circulo")
  console.log(`El perimetro del circulo es: ${(2 * Math.PI * radio)}`)
  alert(`El perimetro del circulo es: ${(2 * Math.PI * radio)}`)
  return "El perimetro del circulo es: " + (2 * Math.PI * radio)
}


});

