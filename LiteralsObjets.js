let nombre = "kEnAi",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauu!!");
  },
};

console.log(perro); //Llamo una funcion
perro.ladrar(); //Llamo un atributo

const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("guaauuu guaauuuu guuaaauuuu");
  },
  sumar() {
    let num1 = 1;
    let num2 = 2;
    let suma = num1 + num2;
    console.log(suma);
  },
};

console.log(dog);
dog.ladrar();
dog.sumar();
