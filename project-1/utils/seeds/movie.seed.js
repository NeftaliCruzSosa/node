const mongoose = require("mongoose");

const Movie = require("../../models/movie");
const { connectDb } = require("../db");

require("dotenv").config();

const DB_URL = process.env.DB_URL;

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

const moviesDocuments = movies.map((movie) => new Movie(movie));

connectDb()
  .then(async () => {
    await Movie.collection.drop();
  })
  .catch((error) => console.log("Los datos no se han podido eliminar " + error))

  .then(async () => {
    await Movie.insertMany(moviesDocuments);
  })
  .catch((error) => console.log("Error al introducir los datos " + error))
  .finally(() => mongoose.disconnect());
