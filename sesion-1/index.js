const express = require("express");

const PORT = 3000;
const server = express();
const router = express.Router()

router.get("/", (request, response) => {

  const tortilla = {
    huevos: 3,
    patatas: "Muchas",
    punto: "poco hecha",
  };

  return response.send(tortilla);
});

router.get("/huevos-fritos", (request, response) => {

  const huevosFritos = {
    cantidad: 4,
    variedad: "huevos camperos",
    patatas: true
  };

  return response.send(huevosFritos);
});

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Servidor en marcha en http://localhost:${PORT}`);
});
