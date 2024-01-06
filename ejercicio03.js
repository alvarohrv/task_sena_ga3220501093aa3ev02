/*
3. Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17  y   2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17.

Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos de forma ascendente. 

*/
export const ejecutarEjercicio03 = (() => {
  
let cantidad_vector1 = 5;
let cantidad_vector2 = 5;
// let v1 = [1,3,6,9,17];
// let v2 = [2,4,10,17];
let v1 = [];
let v2 = [];
let v3 = [];
v1 = ingresar_elementos(cantidad_vector1,'v1')
console.log(v1)
v2 = ingresar_elementos(cantidad_vector2,'v2')
console.log(v2)

//concatenar el vector 1 y 2
v3 = v1.concat(v2)
//ordenar el vector ascendentemente
v3.sort(function(a,b){return a-b});
console.log(v3) //[1 2 3 4 6 9 10 17 17]

return `
  Vector1 : [${v1}] <br>
  Vector2 : [${v2}] <br>
  Contanecion ascedente: <br>
  Vector3 : [${v3}]
`


function ingresar_elementos(n,v){
  let vector = []
  for(let i=1; i<n; i++){
    let elemento = parseInt(prompt(`elemento ${i}/${v}) Ingrese un numero entero: `));
    elemento = verificacion(elemento,vector,i,v)
    vector.push(elemento) 
  }
  return vector
}

function verificacion(elemento,vector,i,v){
  if(elemento < 0){
    alert(`-El elemento ${i}/${v} ingresado es negativo, por favor ingrese un numero entero positico`)
    console.log(`El numero ingresado no es valido`)
    elemento = parseInt(prompt(`elemento ${i}/${v}) Ingrese un numero entero: `));
    elemento = verificacion(elemento,vector,i,v)
  }
  if(isNaN(elemento)){
    alert(`+El elemento ${i}/${v} ingresado es nulo, ingrese un numero entero`)
    console.log(`+El elemento ${i}/${v} ingresado es nulo, ingrese un numero entero`)
    elemento = parseInt(prompt(`elemento ${i}/${v}) Ingrese un numero entero: `));
    elemento = verificacion(elemento,vector,i,v)
  }
  if(elemento < vector[i-1-1]){
    alert(`+El elemento ${i}/${v} ingresado es menor al anterior '${vector[i-2]}', por favor ingrese un numero n+1`)
    console.log(`+El elemento ${i}/${v} ingresado es menor al anterior '${vector[i-2]}', por favor ingrese un numero n+1`)
    elemento = parseInt(prompt(`elemento ${i}/${v}) Ingrese un numero entero: `));
    elemento = verificacion(elemento,vector,i,v)
  }
  return elemento
}
 
});