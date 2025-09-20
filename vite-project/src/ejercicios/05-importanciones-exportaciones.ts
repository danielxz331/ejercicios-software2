import { type Producto , calcularImpuesto} from "./clase-01";


const carrito: Producto[] = [
    {
        descripcion: 'Carro',
        precio: 1020
    },
    {
        descripcion: 'Celular',
        precio: 1010
    }
]

const [total, totalImpuesto] = calcularImpuesto({
    impuesto: 0,
    productos: [],
    propina: 0
})
console.log({total, totalImpuesto});

/*
Crear un archivo con 2 interfaces, otro archivo con una funcion que reciba por parametro un objeto de
tipo de una interfaz y retonre un string con datos del objeto, y otro archivo que haga el llamdo de la
funcion
*/