function crearCaja<T>(argument: T): T {
    return argument;
}

interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}


const hamburguesaBacon: Comida = {
    nombre: 'Bacon',
    calorias: 300,
    esVegana: false
}

interface Objeto {
    contenido: any
}

let objeto: Objeto = {
    contenido: crearCaja(5)
}

let objeto1: Objeto = {
    contenido: crearCaja("Hola")
}

let objeto2: Objeto = {
    contenido: crearCaja(hamburguesaBacon)
}

console.log(objeto.contenido)
console.log(objeto1.contenido)
console.log(objeto2.contenido)