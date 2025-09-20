import {type Empresa} from "./06-ejercicio-clase2-interfaces"

export function informacion(options: Empresa): string {
    let informacion:string = `La empresa ${options.nombre} esta ubicada en ${options.lugar}`;
    return informacion;
}