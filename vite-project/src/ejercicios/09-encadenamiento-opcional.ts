export interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Pepito',
    hijos: ['Janeiro', 'Fevereiro']
}

const pasajero2: Pasajero = {
    nombre: 'Perez',
}

// const mostrarHijos = (pasajero: Pasajero) 