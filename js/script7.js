/* 7 - Dado un numero entero positivo obtener el factorial del mismo.*/ 
let numero=prompt('Ingresa un numero');
let factorial=1;
for (let entero= 1; entero<=numero; entero++){
    factorial=factorial*entero;
}
console.log("Su factorial de: " + numero + " es: " + factorial);