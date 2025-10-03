interface Detalle {
    autor: string
    anio: number;
}

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}

const reproductorAudio: ReproductorAudio = {
    volumen: 50,
    duracion: 10,
    cancion: "Cancion Prueba",
    detalle: {
        autor: "El Joe",
        anio: 2025
    }
}

//const cancion = reproductorAudio.cancion;
//const autor = reproductorAudio.detalle.autor;
//console.log(cancion);
//console.log(autor);

//console.log(reproductorAudio);

const { cancion: nombreCancion } = reproductorAudio;
console.log(nombreCancion);

const { detalle } = reproductorAudio;
const { autor: nombreAutor1 } = detalle;
console.log(nombreAutor1);

const { detalle: {autor: nombreAutor2 } } = reproductorAudio;
console.log(nombreAutor2);

// arrays

const frutas = ["Peras", "Manzanas", "Fresas"];
console.log("Frutas: " + (frutas[3] || 'No se ha encontrado'));

const [p1, p2, p3] = frutas;
console.log(p1, p2, p3);

console.log(p3);

///////////////-------------//////////////////

export interface Producto {
    descripcion: string;
    precio: number;
}
const celular: Producto = {
    descripcion: "Samsung A1",
    precio: 100,
}
const computador: Producto = {
    descripcion: "Lenovo",
    precio: 300,
}

const carrito: Producto[] = [celular, computador];
const impuesto: number = 0.19;
const propina: number = 3

interface ImpuestosOption {
    impuesto: number;
    productos: Producto[];
    propina: number;
}

export function calcularImpuesto(options: ImpuestosOption): number[] {
    let total:number = 0;
    options.productos.forEach(({precio}) => {
        total += precio;
    });
    return [total, total * options.impuesto, 3];
}

const options: ImpuestosOption = {
    impuesto,
    productos: carrito,
    propina: propina
}

const resultadoCompra: number[] = calcularImpuesto(options);

console.log("Total: " + resultadoCompra[0]);
console.log("Total impuestos" + resultadoCompra[1]);
console.log("propina: " + resultadoCompra[2]);

export {}