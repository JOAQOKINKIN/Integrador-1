class Cine {
    constructor(pelicula, sala) {
this.pelicula = pelicula;
this.sala = sala;
    }
  ObtenerPelicula() {
      return `{ pelicula : ${this.pelicula }}`;

  }
}
module.exports = Cine;