var as = 23;
let os = 2;
let hola = "Hola mundo";

console.log(as + os);
console.log(hola);

//***************

let a;

a = "kenia";
const PI = 3.1416;

console.log(PI);
console.log(a);

console.log("********************");

/*
        let objeto = {
            nombre1 :"jon",
            edad: 35
        }

        let colores = ["blanco", "negro", "azul"]

        console.log(objeto);
        console.log(colores);

        objeto.correo = "jonmircha@hmail.com"
        colores.push("anaranjado");

        console.log(colores);
        console.log(objeto); */

//Cadenas de Texto aka Strings

let nombre = "Jon";
let apellido = "MirCha";
let saludo = new String("Hola Mundo");
let lorem = "Loremdasdasdasdasd, asdasda, Vladimir, node";
console.log(nombre, apellido, saludo);
console.log(
  nombre.length, //length: cantidad de caracteres de String
  apellido.length,
  saludo.length,

  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("node"), //busca la palabra en el texto, devuelve True-False
  lorem.trim(),
  lorem.split(" "), //busca todos los espacios en blanco
  lorem.split(",") //Separa los espacios con ","
);

let nom = "Vladimir";
let ape = "Gutierrez";

//concatenación
let saludo = "Hola, mi nombre es " + nom + " " + ape + ".";

console.log(saludo);

//interpolacion de variables
//Template String

let saludo2 = `Hola, mi nombre es ${nom} ${ape}.`;
console.log(saludo2);

//Cadenas de Texto aka Strings

      let nombre = "Jon";
      let apellido = "MirCha";
      let saludo = new String("Hola Mundo");
      let lorem = "Loremdasdasdasdasd, asdasda, Vladimir, node";
      console.log(nombre, apellido, saludo);
      console.log(
        nombre.length, //length: cantidad de caracteres de String
        apellido.length,
        saludo.length,

        nombre.toUpperCase(),
        apellido.toLowerCase(),
        lorem.includes("node"), //busca la palabra en el texto, devuelve True-False
        lorem.trim(),
        lorem.split(" "), //busca todos los espacios en blanco
        lorem.split(","), //Separa los espacios con ","
