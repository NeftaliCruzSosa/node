const express = require("express");
const { connectDb } = require("./utils/db");
require("dotenv").config();

const Movie = require("./models/movie")

connectDb()

const PORT = process.env.PORT || 4000;

const server = express();
const router = express.Router();

router.get("/", (req, res) => {

    Movie.find()
    .then(movies => {
        return res.status(200).json(movies);
    }).catch((error) => {
        return res.status(500).json(error);
    })

});

router.get("/:id", (req, res) => {

    const id = req.params.id;

    Movie.findById(id)
    .then(movies => {
        return res.status(200).json(movies);
    }).catch((error) => {
        return res.status(500).json(error);
    })

});

router.get("/title/:title", (req, res) => {

    const title = req.params.title;

    Movie.find( {title: title} )
    .then(movies => {
        return res.status(200).json(movies);
    }).catch((error) => {
        return res.status(500).json(error);
    })

});

router.get("/genre/:genre", (req, res) => {

    const genre = req.params.genre;

    Movie.find( {genre: genre} )
    .then(movies => {
        return res.status(200).json(movies);
    }).catch((error) => {
        return res.status(500).json(error);
    })

});

router.get("/year/:year", (req, res) => {

    const year = req.params.year;

    Movie.find( {year: {$gt:year}} )
    .then(movies => {
        return res.status(200).json(movies);
    }).catch((error) => {
        return res.status(500).json(error);
    })

});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});