//Manejar objetos
let nombre = "Vladimir", edad = 24;

const humano = {
    nombre : nombre,
    edad: edad,
    saludar:function(){
        console.log("Hi, how are you?")
    }
}

console.log(humano); // llamo todo el objeto

humano.saludar(); //llamo solo una propiedad del obj

//Objetos literales
const human = {
    nombre,
    edad,
    ocupacion: "Estudent",
    salute(){
        console.log("Hola rey!");
    }
}

console.log(human) //imprimo obj
console.log(human.ocupacion)
human.salute(); //imprimo propiedad