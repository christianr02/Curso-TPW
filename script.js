function Drama(id, Nombre, Genero, Disponible){
    this.Nombre = Nombre;
    this.Genero = Genero;
    this.id = id;
    this.Disponible = Disponible;
}
const ElPadrino = new Drama(
    1,
    "El Padrino (1972)",
    "Drama",
    "Amazon Prime",
)
const ElCiudadano = new Drama(
    2, 
    "El ciudadano Kane (1941)",
    "Drama",
    "Amazon Prime",
)
const Rescatando = new Drama(
    3,
    "Rescatando al soldado Ryan (1998)",
    "Drama",
    "Amazon Prime, YouTube",
)
function Terror(id, Nombre, Genero, Disponible){
    this.Nombre = Nombre;
    this.Genero = Genero;
    this.id = id;
    this.Disponible = Disponible;
}
const Hereditary = new Terror(
    4,
    "Hereditary (2018)",
    "Terror",
    "Netflix",
)
const TheWitch = new Terror(
    5,
    "The Witch (2015)",
    "Terror",
    "Netflix",
)
const ElHoyo = new Terror(
    6,
    "El Hoyo (2020)",
    "Terror",
    "Netflix",
)
function Comedia(id, Nombre, Genero, Disponible){
    this.Nombre = Nombre;
    this.Genero = Genero;
    this.id = id;
    this.Disponible = Disponible;
}
const Deadpool = new Comedia(
    7,
    "Deadpool (2016)",
    "Comedia",
    "Amazon Prime",
)
const Scary = new Comedia(
    8,
    "Scary Movie (2000)",
    "Comedia",
    "Netflix, Amazon Prime",
)
const Home = new Comedia(
    9,
    "Home Alone (1990)",
    "Comedia",
    "Amazon Prime",
)
