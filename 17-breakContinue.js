const numeros = [1,2,3,4,5,6,7,8,9,10]
for (let i= 0; i < numeros.length; i++)
{
    console.log(i)
}

for(let i=0; i<numeros.length; i++){
    if (i==5){
        break; // rompe el for y sale.
    }
    console.log(i)
}

for (let i = 0; i < numeros.length; i++) {
    if (i == 5) {
        continue; //continue permite saltar el siguiente codigo dentro del for
    }
    console.log(i);
}