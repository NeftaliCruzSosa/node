const mongoose = require("mongoose");

const Movie = require("../../models/movie")

require("dotenv").config();

const DB_URL = process.env.DB_URL

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

const moviesDocuments = movies.map(movie => new Movie(movie));

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    const allMovies = await Movie.find();

    if (allMovies) {
        await Movie.collection.drop()
        console.log("Se an eliminado todas las peliculas");
    }
  })
  .catch((error) => console.log("Los datos no se han podido eliminar " + error))
  .then(async() => {

    await Movie.insertMany(moviesDocuments);
    console.log("Se han generado las nuevas peliculas");

  })
  .catch((error) => console.log("No he podido meter los datos " + error))
  .finally(() => mongoose.disconnect())