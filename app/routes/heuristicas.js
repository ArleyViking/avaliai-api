const controller = require("../controllers/heuristicas");

module.exports = function (app) {
  app.post("/heuristica", controller.inserirHeuristica);
  app.get("/heuristicas", controller.buscarHeuristica);
  app.get("/heuristicas/:categoria", controller.buscarHeuristicaPorCategoria);
  app.get("/heuristica/:_id", controller.buscarHeuristicaPorID);
};
