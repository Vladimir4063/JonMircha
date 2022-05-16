try{
    console.log("Codigo a evaluar");
    variableNum = 20 // cambia el valor para ver el catch

    // isNaN verifica que sea un numero
    if(isNaN(variableNum)){
        throw new Error("El caracter no es un numero");
    }
}catch(error){
    // console.log(error)
    console.log("Hay un error en el codigo")
    console.log("Se produjo el siguiente error: ${error}");
}finally{
    console.log("Bueno crack, finalizo")
}


