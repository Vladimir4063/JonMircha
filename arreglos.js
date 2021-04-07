const a = [];
const b = [1, true, "hola", ["A", "B", "C"]];

//console.log(a);

//sin destructuracion
const numeros = [1, 2, 3];
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos, tres);

//Con destruccturacion
const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35,
};

let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);


