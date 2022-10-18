const bodyParser = require("body-parser");
const express = require("express");
const routeChecklists = require("../app/routes/checklists");
const routeCategorias = require("../app/routes/categorias");
const routeHeuristicas = require("../app/routes/heuristicas");
const routeContadores = require("../app/routes/contadores");
const routeItens = require("../app/routes/itensdeverificacao");
const cors = require("cors");

module.exports = function () {
  let app = express();
  app.use(cors());
  app.set("port", process.env.PORT || 3000);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static("./public"));

  routeItens(app);
  routeCategorias(app);
  routeHeuristicas(app);
  routeContadores(app);
  routeChecklists(app);
  return app;
};
