let contador = 0;

while(contador < 10)
{
    contador = contador + 1
    console.log(contador)
}


// forma do-while
do{
    console.log("do While " + contador);
    contador++;
}while(contador < 10)

// for 
for(let i = 0; i < 10; i++)
{
    console.log("for "+ i)
}

let numeros = [10, 20, 30, 40, 50, 60, 10, 20, 30, 40, 50, 60];

for(let i = 0; i< numeros.length; i++)
{
    console.log(numeros[i])
}


// for in
const vladimir={
    name :"Vladimir",
    sername : "gutierrez",
    edad : 24
}

for(const propiedad in vladimir){
    console.log(propiedad); //imprime solo la propiedad
    console.log(vladimir[propiedad])
    // console.log('Key: ${propiedad}, Value: ${vladimir[propiedad]}');
}

// for off
console.log("for of");
let cadena = "Hola mundo";
let cadenaClear = cadena.split(" ").join("");
console.log(cadenaClear);

for (const caracter of cadenaClear){
    console.log("Este es un caracter: "+ caracter)
}

// recorre por elemento
for (const elemento of numeros) {
    console.log(elemento)
}
