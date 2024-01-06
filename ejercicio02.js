
/*
2. Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
un nuevo valor. 
*/
export const ejecutarEjercicio02 = (() => {
  
var cantidad_de_personas = 10
var edades = [];
var menores = 0;
var mayores = 0;
var adultosMayores = 0;

var edadMasBaja = 120; //se inicializa con un valor alto para que cualquier edad ingresada sea menor y luego se va actualizando
var edadMasAlta = 0; //se inicializa con un valor bajo para que cualquier edad ingresada sea mayor y luego se va actualizando

var sumaEdades = 0;
var promedioEdades = 0;

for (var i = 0; i < cantidad_de_personas; i++) {
  var edad = parseInt(prompt("Ingrese la edad de la persona " + (i + 1)))
  edad = validacion(i, edad);
  edades.push(edad);
  // cantidad de personas por grupo de edad
  if (edad < 18) {
    menores++;
  } else if (edad >= 18 && edad < 60) {
    mayores++;
  } else {
    adultosMayores++;
  }
  // la edad mas baja y mas alta
  if (edad < edadMasBaja) {
    edadMasBaja = edad;
  }if (edad > edadMasAlta) {
    edadMasAlta = edad;
  }
  sumaEdades += edad;
}
promedioEdades = sumaEdades / cantidad_de_personas;

return printResulados()

/////////////FUCIONES //////////////////

function printResulados(){
  console.log("array con todas las edades: " + edades)
  console.log("Cantidad de personas menores de edad: " + menores);
  console.log("Cantidad de personas mayores de edad: " + mayores);
  console.log("Cantidad de adultos mayores: " + adultosMayores);
  console.log("Edad mas baja: " + edadMasBaja);
  console.log("Edad mas alta: " + edadMasAlta);
  console.log("Promedio de edades: " + promedioEdades);
  
  alert(`Array con todas las edades: ${edades}
  Cantidad de personas menores de edad: ${menores}
  Cantidad de personas mayores de edad: ${mayores}
  Cantidad de adultos mayores: ${adultosMayores}
  Edad mas baja: ${edadMasBaja}
  Edad mas alta: ${edadMasAlta}
  Promedio de edades: ${promedioEdades}`);

  let textoHtml = `Array con todas las edades:<br> [${edades}] <br>
    Cantidad de personas menores de edad:<br> ${menores}<br>
    Cantidad de personas mayores de edad:<br> ${mayores}<br>
    Cantidad de adultos mayores: ${adultosMayores}<br>
    Edad mas baja:<br> ${edadMasBaja}<br>
    Edad mas alta:<br> ${edadMasAlta}<br>
    Promedio de edades:<br> ${promedioEdades}`

  return textoHtml
}

function validacion(i, edad) {
  while (edad < 1 || edad > 120 || isNaN(edad)) {
    alert("La edad ingresada no es válida. Intente nuevamente.");
    edad = parseInt(prompt("Ingrese la edad de la persona " + (i + 1)));
    edad = validacion(i, edad);
    return edad;
  }
  return edad;
}
    
});