//El console.log() es solamente de ayuda para verificar la salida de las funciones

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre por la funcion 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog("Camilo")
    );
}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);// Todo lo que esta debajo del return no se ejecuta
}