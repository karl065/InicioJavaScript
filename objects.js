/*
var deportes = {
    conBalon: ["Football", "Basketball", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "Trekking"],
};
*/
/*
var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };

console.log(persona.nombre);

persona.nombre = "Martin";
console.log(persona.nombre);
persona.edad = 32;
console.log(persona.edad);
// Dot Notation, se asigna una nueva key y valor con el (punto), seguido del nombre de la key y
 los igualamos a los valores que contendra esa key
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
delete autos.marcas;
console.log(autos);
*/
/*
var misFunciones = {
  saludar: function () {
    console.log("hola");
  },
};

misFunciones.saludar();
*/
/*
var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
console.log(atuendos.manos);
//Bracket notation, se utilizan las llaver para referirnos a la nueva key y posteriormente
//igualamos los valores dentro de la key.
atuendos['Piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);
*/

// adicionar keys dentro de una Funciona
//Se debe usar bracket notation sin las comillas
/*
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas[propUno] = ['Frutas', 'Vegetales'];
  comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);
*/

//uso del HasOwnProperty que significa tiene su propiedad es valor booleano
/*
var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
*/
//console.log(tienePropiedad);

//Metodo keys devolver un arreglo con el nombre de todas las propiedades de un objeto
/*
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);
*/

//Metodo For in un bucle para recorrer todos las propiedades de un objeto

var mundo = {continente: 7, paises: 195, oceanos: 5};
for (var prop in mundo) {
  console.log('Esta es la propiedad: ' + prop); // Propiedades Continente, paises, oceanos
  console.log('Este es el valor ' + mundo[prop]); // Valores 7, 195, 5
}

//objeto this hace referencia a un contexto
/*
var mascota = {
  animal: 'Perro',
  raza: 'Ovejero Aleman',
  amistoso: true,
  dueña: 'Maria Lopez',
  info: function () {
    console.log('Mi perro es un ' + this.raza);
  },
};
mascota.info();
*/
