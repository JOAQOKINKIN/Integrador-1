const Cine = require ('./Cine');

console.info("Ejemplo de polimorfismo cine");

const c1 = new Cine (Capitan_America, sala_dos);
const rta = c1.ObtenerPelicula();

console.info(rta);

const c2 = new Cine(Iron_Man, sala_cuatro);
console.info(c2.ObtenerPelicula());

