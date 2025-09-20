// {
//     status: boolean;
//     message: string;
//     statusCode: number;
//     result: [usuarios]
// }

function verTipo<T>(argument: T): T {
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: "Prueba",
    genero: "aaa",
    edad: 1
}

let prueba = verTipo("a");
let prueba1 = verTipo(true);
let prueba2 = verTipo(1);
let prueba3 = verTipo(vaca)

console.log(prueba)
console.log(prueba1)
console.log(prueba2)
console.log(prueba3)

/// -------------------------------------
interface ReturnEnvolve<T> {
    contenido: T;
}
function crearCaja<T>(param: T): ReturnEnvolve<T> {
    return { contenido: param};
}

console.log(crearCaja("Pepito"));
console.log(crearCaja(1));
console.log(crearCaja(vaca))

export {}