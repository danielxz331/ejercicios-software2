function sumar(a:number, b:number):number {
  return a + b;
}

const result = sumar(3, 2)

console.log({result})

const sumar2 = (n1:number, n2:number): number => {
    return n1 + n2;
}

const resultado:number = sumar2(1, 2);

console.log({result, resultado});

function multiplicar(primerNumero:number, base:number = 4, segundoNumero?:number): number {
    return primerNumero * base;
}

const res: number = multiplicar(7, 3)
console.log({res})


///////////// ****************** /////////////////////

interface PersonaInterface {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}


const porcentajeVida = (personaje: PersonaInterface, vida:number) => {
   personaje.vida += vida
}

const persona1: PersonaInterface = {
    nombre: 'Pepito',
    vida: 20,
    mostrarDetalle() {
        console.log(`nombre -> ${this.nombre} vida -> ${this.vida}`);
    },
}

console.log(persona1);

interface DireccionInterface {
        ciudad:string,
        pais:string
    }

interface UsuarioInterface {
    id:number,
    nombre:string,
    email:string,
    activa:boolean,
    roles:string[],
    direccion: DireccionInterface,
    saludar ():string;
    actualizarEmail (nuevoEmail:string):void
}

// Ejercicio implementar la interfaz para la siguiente
const usuario1: UsuarioInterface = {
    id: 1,
    nombre: "Ana Perez",
    email: "ana@example.com",
    activa: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogota",
        pais: "Colombia"
    },
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string):void {
        this.email = nuevoEmail;
    }
};



export {};