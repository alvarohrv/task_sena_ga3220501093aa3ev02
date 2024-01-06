/*
4. Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más
escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del
programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer
la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una
rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su
nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia,
ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en
cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá
mostrar un menú que permita las siguientes opciones: 
a. Agregar una persona con los datos que se listan anteriormente. 
b. Mostrar la información personal de una persona particular por medio de su posición en el vector. 

DATOS
se requiere opinion de 6 personas
La emisora desea poder registrar administrativamente: nombre, cedula, fecha de nacimiento, correo, ciudad de residencia y de origen.
Ademas desea poder registrar musicalmente: 3 canciones favoritas con artista y título 
El programa debera: Agregar una persona con los datos 
El programa debera: Mostrar la información personal de una persona particular por medio de su posición en el vector
*/
export const ejecutarEjercicio04 = (() => {
// Declaracion de variables
let personas = [];
let textHtml = ""
let cantidad_encuestas = parseInt(prompt("Cuantas personas desea encuestar?. Por ejemplo 6 o 1 persona"));
cantidad_encuestas = validarCantidadEncuestas(cantidad_encuestas);
for (let i = 0; i < cantidad_encuestas; i++) {
  personas[i] = agregarPersona(i+1)
}
alert("Se han encuestado "+cantidad_encuestas+" personas; ahora se podra mostrar la informacion")
  
textHtml = `
<h4>Cantidad de personas encuestadas</h4> <br>
${cantidad_encuestas} personas<br>
<h4>Informacion de las personas encuestadas</h4>
`
  
let index = consultarValidar(personas,cantidad_encuestas)
while(index=>0){
  if(index<0){
    console.log('FIN DE LA CONSULTA')
    break
  }
  let [stringInfo, stringHtml]  = mostrarInfo(personas[index])
  alert(stringInfo)
  console.log('stringInfo',stringInfo)
  console.log('stringHtml',stringHtml)
  textHtml +='<br>'+stringHtml
  index = consultarValidar(personas,cantidad_encuestas)
}

  return textHtml
  

  
///////////////// 

function consultarValidar(personas,cantidad_encuestas) {
  console.log("REALIZANDO CONSULTA DE PERSONAS ENCUESTADAS")
  let respuesta = prompt("Desea consultar la información personal de una persona particular por medio de su posición en el vector? (s/n)");
  if (respuesta == "s" || respuesta == "1" || respuesta == "S") {
    let posicion = prompt("Ingrese el lugar de la persona que desea consultar segun fue ingresada (1,2,3,4,5,6,...)");;
    let index = parseInt(posicion) - 1;
    console.log('personas[index]',personas[index])
    if(index>=0 && index < cantidad_encuestas && personas[index]){
      let confirmacion  = prompt("Desea consultar la información personal de " + personas[index].admin.nombre + "? (s/n)");
      if(confirmacion == "s"){
        return index
      }else{
        return consultarValidar(personas,cantidad_encuestas)
      }
      
    }else{
      alert("La posicion ingresada no es valida")
      return consultarValidar(personas,cantidad_encuestas)
    }
  }else{
    respuesta = prompt("ESPERA ESPERA!!! seguroooo no quieres realizar consulta? (s/n)");
    if(respuesta == "s" || respuesta == "1" || respuesta == "S"){
      return -1
    }else{
      return consultarValidar(personas,cantidad_encuestas)
    }   
  }
}

  ////////////////////
function validarCantidadEncuestas(cantidad_encuestas) {
  if (cantidad_encuestas <= 0) {
    alert("La cantidad de encuestas debe ser mayor a 0")
    let cantidad_encuestas = parseInt(prompt("Cuantas personas desea encuestar?. Por ejemplo 6 o 1 persona"));
    return validarCantidadEncuestas(cantidad_encuestas)
  }if(cantidad_encuestas >= 7) {
    alert("La maxima cantidad de encuestas es 6")
    let cantidad_encuestas = parseInt(prompt("Cuantas personas desea encuestar?. Por ejemplo 1,2,3..., max 6 personas"));
    return validarCantidadEncuestas(cantidad_encuestas)
  }
  if(isNaN(cantidad_encuestas)) {
    alert("Ingresa un valor valido")
    let cantidad_encuestas = parseInt(prompt("Cuantas personas desea encuestar?. Por ejemplo 1,2,3..., max 6 personas"));
    return validarCantidadEncuestas(cantidad_encuestas)
  }
  return cantidad_encuestas
}


    
/////////////////////////////////////////
// Funcion para agregar personas
function agregarPersona(p) {
  alert("NOTA: presione ESC si desea dejar campos vacios")
  let persona = {
    admin:{},
    cancionesFavoritas:[]
  };
  persona.admin.nombre = prompt("Ingrese el nombre de la persona de persona: "+p);
  persona.admin.cedula = prompt("Ingrese el numero de cedula de "+persona.admin.nombre);
  persona.admin.fechaNacimiento = prompt("Ingrese la fecha de nacimiento de: "+ persona.admin.nombre);
  persona.admin.correo = prompt("Ingrese el correo electronico de: "+ persona.admin.nombre);
  persona.admin.ciudadResidencia = prompt("Ingrese la ciudad de residencia de: "+ persona.admin.nombre);
  persona.admin.ciudadOrigen = prompt("Ingrese la ciudad de origen de : "+ persona.admin.nombre);
  for (let i = 0; i < 3; i++) {
    persona.cancionesFavoritas[i] = {};
    alert(`Ingrese la cancion ${i+1} favorita de: ${persona.admin.nombre}`);
    persona.cancionesFavoritas[i].artista = prompt("Ingrese el artista")
    persona.cancionesFavoritas[i].titulo = prompt("Ingrese el titulo")  
  }
  return persona;
}
/////////////////////
function mostrarInfo(persona){
  let textoPlano = `
    Nombre: ${persona.admin.nombre}
    cedula: ${persona.admin.cedula}
    fecha de nacimiento: ${persona.admin.fechaNacimiento}
    correo electronico: ${persona.admin.correo}
    ciudad de residencia: ${persona.admin.ciudadResidencia}
    ciudad de origen: ${persona.admin.ciudadOrigen}
    canciones favoritas: 
    cancion1: artista: ${persona.cancionesFavoritas[0].artista} 
    cancion1: titulo: ${persona.cancionesFavoritas[0].titulo}
    cancion2: artista: ${persona.cancionesFavoritas[1].artista}
    cancion2: titulo: ${persona.cancionesFavoritas[1].titulo}
    cancion3: artista: ${persona.cancionesFavoritas[2].artista}
    cancion3: titulo: ${persona.cancionesFavoritas[2].titulo} 
    `
  
  let textHtml = `
    PERSONA::::<br>
    Nombre: ${persona.admin.nombre} <br>
    cedula: ${persona.admin.cedula} <br>
    fecha de nacimiento: ${persona.admin.fechaNacimiento} <br>
    correo electronico: ${persona.admin.correo} <br>
    ciudad de residencia: ${persona.admin.ciudadResidencia} <br>
    ciudad de origen: ${persona.admin.ciudadOrigen} <br>
    canciones favoritas:  <br>
    cancion1: artista: ${persona.cancionesFavoritas[0].artista}<br>  
    cancion1: titulo: ${persona.cancionesFavoritas[0].titulo}<br>
    cancion2: artista: ${persona.cancionesFavoritas[1].artista}<br>
    cancion2: titulo: ${persona.cancionesFavoritas[1].titulo}<br>
    cancion3: artista: ${persona.cancionesFavoritas[2].artista}<br>
    cancion3: titulo: ${persona.cancionesFavoritas[2].titulo} <br>
    ----------------------<br>
    `
  
  return [textoPlano, textHtml]
}

});