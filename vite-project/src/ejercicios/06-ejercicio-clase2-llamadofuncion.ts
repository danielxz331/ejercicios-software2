import {type Empresa} from "./06-ejercicio-clase2-interfaces"
import { informacion } from "./06-ejercicio-clase2-funcion";

const options: Empresa = {
    nombre: "Lavenir",
    lugar: "Bogota",
}

const informacionEmpresa: string = informacion(options);

console.log(informacionEmpresa);

export {}