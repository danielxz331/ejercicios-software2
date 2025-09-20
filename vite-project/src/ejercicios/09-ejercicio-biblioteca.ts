/*
# Ejercicio: Biblioteca Digital con Encadenamiento Opcional

## Enunciado

Crea un sistema que modele libros usando TypeScript y aprovecha el encadenamiento opcional (`?.`) y el operador nullish coalescing (`??`).

---

### 1. Define una interfaz `Libro` con las siguientes propiedades:
- `titulo: string`
- `autor?: { nombre?: string; pais?: string }`
- `anioPublicacion?: number`

---

### 2. Crea una función llamada `mostrarLibro` que reciba un objeto `Libro` y muestre en consola:
- El **título** (obligatorio).
- El **nombre del autor** (si no está definido, mostrar "Autor desconocido").
- El **país del autor** (si no está definido, mostrar "País desconocido").
- El **año de publicación** (si no está definido, mostrar "Año no disponible").

> Usa encadenamiento opcional (`?.`) para acceder a `autor?.nombre` y `autor?.pais`.
> Usa `??` para dar valores por defecto.

---

### 3. Crea al menos tres libros:
- Uno con **todos los datos completos**.
- Uno **sin autor**.
- Uno **sin año de publicación**.

Llama a la función con los tres libros y observa cómo maneja los datos faltantes sin errores.
*/

interface Libro {
  titulo: string;
  autor?: {
    nombre?: string;
    pais?: string;
  };
  anioPublicacion?: number;
}

function mostrarLibro(libro: Libro): void {
  console.log("Título:", libro.titulo);
  console.log("Autor:", libro.autor?.nombre ?? "Autor desconocido");
  console.log("País del autor:", libro.autor?.pais ?? "País desconocido");
  console.log("Año de publicación:", libro.anioPublicacion ?? "Año no disponible");
  console.log('------------------------');
}

const libroCompleto: Libro = {
  titulo: "Cien años de soledad",
  autor: {
    nombre: "Gabriel García Márquez",
    pais: "Colombia"
  },
  anioPublicacion: 1967
};

const libroSinAutor: Libro = {
  titulo: "El arte de la guerra",
  anioPublicacion: -500
};

const libroSinAnio: Libro = {
  titulo: "Don Quijote de la Mancha",
  autor: {
    nombre: "Miguel de Cervantes",
    pais: "España"
  }
};

mostrarLibro(libroCompleto);
mostrarLibro(libroSinAutor);
mostrarLibro(libroSinAnio);
