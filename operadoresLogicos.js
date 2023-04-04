function mayoYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false);
};

mayoYMenorYPar(8);
mayoYMenorYPar(7);

function operadorOr(str) {
    if (str === "Henry" || str.length < 2) console.log(true);
    else console.log(false);
};

operadorOr("Henry");
operadorOr("JavaScript");

function negacion(permiso) {
    if (!permiso) console.log("Tiene permiso");
};

negacion(true);
negacion(false);

function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
