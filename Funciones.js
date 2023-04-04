//Imprimir resulado en la consola con console.log()
function sumaTres(x){
    console.log(x + 3);
}

sumaTres(5);


//Formas de definir una funcion
// #1 retornando el resultado
function sumaTres(x){
    return x + 3;
}

//#2 guardando la funcion en una variable
var sumaTres = function (x){
    return x + 3;
};

//#3 Funcion de flecha =>
var sumaTres = (x) =>{
    return x + 3;
};

