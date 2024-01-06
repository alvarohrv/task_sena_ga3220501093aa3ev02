import { ejecutarEjercicio01 } from './ejercicio01.js';
import { ejecutarEjercicio02 } from './ejercicio02.js';
import { ejecutarEjercicio03 } from './ejercicio03.js';
import { ejecutarEjercicio04 } from './ejercicio04.js';
let divRespuesta

document.addEventListener('DOMContentLoaded', function() {
  divRespuesta = document.getElementById("idDivRespuesta");
});

let ejercicio;
let btns = document.querySelectorAll(".btn");
console.log('btns',btns);
divRespuesta = document.getElementById("idDivRespuesta");
console.log(divRespuesta)
let data = ""
//...
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",(e)=>{
    console.log('entroListener')
    ejercicio = e.target.innerText
    console.log('ejerc',ejercicio)
    switch (ejercicio) {
        case "Ejercicio 1":
          data = ejecutarEjercicio01()
          divRespuesta.innerHTML = data;
        break;
        case "Ejercicio 2":
          data = ejecutarEjercicio02()
          divRespuesta.innerHTML = data;
        break;
        case "Ejercicio 3":
          data = ejecutarEjercicio03()
          divRespuesta.innerHTML = data;
        break;
        case "Ejercicio 4":
          data = ejecutarEjercicio04()
          divRespuesta.innerHTML = data;
        break;
    }
  })
}
//imprime el string data en el nodo con id="idDivRespuesta"





                   
