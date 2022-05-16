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

const arregloArray = Array.of("X","Y","Z",9,8,7);

console.log("Soy el arregloArray");
console.log(arregloArray);


// Crea una array de 100 elemntos con el valor asignado
const arrayD = Array(100).fill("Hola");
console.log(arrayD)

const colores = ["Rojo","Verde","Azul"];
console.log(colores)

// Agrego un elemento al final con push
colores.push("Amarillo");
console.log(colores);

// Quito el ultimo elemento con Pop
colores.pop();
console.log(colores)


// Llamo al arreglo y la recorro desde una funcion
colores.forEach(function(element, index){
  console.log('<li id=${index}>${element}</li>')
  console.log(index, element)
})