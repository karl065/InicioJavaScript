function sumaTodosPrimos(numeros) {
  // tu código aquí
  var suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    var num = numeros[i];

    if (num === 2 || num === 3) {
      suma += num;
    } else {
      if (num < 2) {
        continue;
      } else if (num % 2 === 0 || num % 3 === 0) {
        continue;
      }
      for (let i = 5; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
          continue;
        }
      }
      suma += num;
    }
  }
}

var numeros = [1, 5, 2, 9, 3, 4, 11];

//sumaTodosPrimos(numeros);

function partir(arreglo, cantidad) {
  // tu código aquí
  var arregloNuevo = [];
  var partinNuevo = [];
  for (let i = 0; i <= arreglo.length; i++) {
    var num = arreglo[i];
    if (partinNuevo.length !== cantidad) {
      if (num !== undefined) {
        partinNuevo.push(num);
      } else {
        arregloNuevo.push(partinNuevo);
      }
    } else {
      arregloNuevo.push(partinNuevo);
      partinNuevo = [];
      i -= 1;
    }
  }
  console.log();
  arregloNuevo;
}

var arreglo = [1, 2, 3, 4, 5];
var cantidad = 2;

//partir(arreglo, cantidad);

class Libro {
  constructor(titulo, autor, traducciones) {
    // Inicializar las propiedades del libro con los valores recibidos como argumento
    // tu código aquí
    this.titulo = titulo;
    this.autor = autor;
    this.traducciones = traducciones;
  }

  getTitulo() {
    // tu código aquí
    console.log(this.titulo);
  }

  getAutor() {
    // tu código aquí
    console.log(this.autor);
  }

  getTraducciones() {
    // Retornar un arreglo con los idiomas de las traducciones
    // tu código aquí
    var traducciones = ['español', 'frances', 'aleman', 'chino'];
    console.log(traducciones);
  }

  addTraduccion(idioma, editorial) {
    // Agregar un objeto: { idioma: idioma, editorial: editorial }
    // al arreglo de traducciones del libro.
    // tu código aquí
    this.traducciones.push({idioma: idioma, editorial: editorial});
  }
}
var traduccionesDeHP = [
  {
    idioma: 'español',
    editorial: 'Santillana',
  },
  {
    idioma: 'frances',
    editorial: 'Mystique',
  },
  {
    idioma: 'aleman',
    editorial: 'Scholastic',
  },
];

var nuevoLibro = new Libro(
  'Harry Potter y la Piedra Filosofal',
  'J.K. Rowling',
  traduccionesDeHP
);

//nuevoLibro.getAutor();
//nuevoLibro.getTitulo();
//nuevoLibro.addTraduccion('chino', 'Sun King');
//nuevoLibro.getTraducciones();

function cuantosOnline(usuarios) {
  // Tu código aquí
  var onlineTrue = 0;
  for (var prop in usuarios) {
    var usuario = usuarios[prop];
    for (var prop in usuario) {
      var status = null;
      if (prop === 'online') {
        status = usuario[prop];
        if (status === true) {
          onlineTrue += 1;
        }
      }
    }
  }
  return onlineTrue;
}

var usuarios = {
  toni: {
    edad: 33,
    online: true,
  },
  emi: {
    edad: 25,
    online: true,
  },
  fran: {
    edad: 25,
    online: false,
  },
  agus: {
    edad: 24,
    online: false,
  },
};

//cuantosOnline(usuarios);

function vegan(invitados) {
  // tu código aquí
  var veganos = 0;
  for (var prop in invitados) {
    var invitado = invitados[prop];
    if (invitado.vegan === true) {
      veganos += 1;
    }
  }
  return veganos;
}

var invitados = {
  Luna: {
    vegan: false,
  },
  Sebas: {
    vegan: false,
  },
  Marce: {
    vegan: false,
  },
  Nicky: {
    vegan: true,
  },
};

//vegan(invitados);

Array.prototype.filtrar = function (cb) {
  // tu código aquí
  var arreglo = [];

  this.forEach((item) => {
    if (cb(item)) {
      arreglo.push(item);
    }
  });
  return arreglo;
};

var productos = [
  {
    price: 100,
    name: 'tv',
  },
  {
    price: 50,
    name: 'phone',
  },
  {
    price: 30,
    name: 'lamp',
  },
];

var salida = productos.filtrar(function (p) {
  return p.price >= 50;
});

//console.log(salida);

function soloStrings(arregloMixto) {
  // tu código aquí
  var strings = [];
  for (let i = 0; i < arregloMixto.length; i++) {
    if (typeof arregloMixto[i] === 'string') {
      strings.push(arregloMixto[i]);
    }
  }
  return strings;
}

//soloStrings([1, 'Henry', 2, 'Toni']);

function buscandoAWally(personajes) {
  // tu código aquí
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i] === 'Wally') {
      return 'He encontrado a Wally en la posicion ' + i;
    }
  }
}

var salida = buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius']);
console.log(salida);
