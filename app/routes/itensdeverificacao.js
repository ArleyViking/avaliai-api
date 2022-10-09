const controller = require("../controllers/itensdeverificacao");

module.exports = function (app) {
  app.post("/itensverificacao", controller.inserirItens);
  app.get("/itensverificacao", controller.buscarItens);
  app.get("/itensverificacao/:heuristica", controller.buscarItensPorheuristica);
};
