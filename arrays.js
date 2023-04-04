//Crear Arrays
/*
var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";
console.log(listaDeCompras.length);
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
*/
/*
var colores = [" amarillo", " azul"];
console.log("Crear Array colores: " + colores);
colores.push(" rojo");
console.log("Agregar elemento al final del array: " + colores);
colores.unshift(" verde");
console.log("Agrergar elemento al inicio del array: " + colores);
colores.pop();
console.log("Eliminar ultimo elemento del array: " + colores);
colores.shift();
console.log("Eliminar primer elemento del array: " + colores);
*/
// Verificar si se incluye algun elemento dentro del array
/*
var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);
var incluyeDali = pintores.includes("Monet");
console.log(incluyeDali);
*/

//Verificar si se cumple alguna condicion dentro del array
/*
var numeros = [1, 6, 8, 9];
var cumpleCondicion = numeros.every((num)  =>{
    return num > 5 ;
});
console.log(cumpleCondicion);
*/

//Convertir un String en un Array, cambiar un elemento dentro del mismo y convertir de array a String
/*
var palabra = "Henri";
var palabraSeparada = palabra.split("");
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join("");
console.log(palabraArrglada); 
*/

//Recorrer un array y modificar los valores dentro del mismo
var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num));
numeros.forEach((num) => {
    if (num === 3) {
        console.log(num)
    }
});
/*
var masUno = numeros.map((num) => {
    return num + 1
});
console.log(masUno);
*/
