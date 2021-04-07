let a = new String("Hola");
console.log(a);

const b = {}
console.log(b);

const c = new Object();
console.log(c);

/*
dentro de un objeto a las variables se le van a llamar atributos/propiedades 
y a las funciones se les llama métodos
*/

const jon = {
    nombre: "Jon",
    apellido: "MirCha",
    edad: 35,
    pasaTiempos: ["correr", "hacer ejercicios", "Dar clases"],
    soltero: false,
    contacto:{
        email:"jonmircha@gmail.com",
        twitter:"@jonmircha",
        movil:"1231231231"
    },
    saludar:function(){
        console.log("Hola :)", $(this.nombre))
    },

    decirMiNombre:function(){
        console.log("Hola me llamo", $(this.nombre), $(this.apellido),"y tengo", $(this.edad), "años")
    }
}

console.log(jon);
console.log(jon["nombre"]);
console.log(jon.pasaTiempos);
console.log(jon.soltero);
console.log(jon.contacto.twitter);
jon.saludar();
//jon.decirMiNombre();

