const numeros = [1,2,3]

//sin destructuracion
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]

console.log(uno,dos,tres);

//con destructuracion
const [one, two, three] = numeros;
console.log(one, two);

const persona = {
    nombre : "Vladimir",
    apellido : "Gutierrez",
    edad : 24
}

let { nombre, edad, apellido } = persona;
console.log(nombre, apellido, "mi edad es de "+ edad);