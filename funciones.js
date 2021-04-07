// Funcion declarada

function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//invocacion de funcion
estoEsUnaFuncion();

function validar() {
  if (a > b) {
    console.log("Esta opcion fue True, adelante");
    return;
  }
  if (b < c) {
    console.log("Weno, no me convence");
  } else {
    console.log("Evidentemente, C ira primero");
  }
}

let a = 13;
let b = 9;
let c = 7;
validar(a, b, c);
