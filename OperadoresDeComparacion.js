// Operadores de comparacion Comparacion
console.log(4 < 7); // 4 Menor que 7
console.log(4 < 1); // 4 Menor que 1
console.log(4 > 7); // 4 Mayor que 7
console.log(4 == 7); // 4 igual que 7

// igualdades
console.log(3 == 3); // Igualdad Verifica valor de dato solamente
console.log(3 === 3); // Estricta verifica tipo de dato y valor de dato
console.log(3 == "3");
console.log(3 === "3");

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = (a = b); // De derecha a Izquierda

console.log(a);
console.log(b);
console.log(c);

console.log(16 / 2 / 4); // De izquierda a derecha
