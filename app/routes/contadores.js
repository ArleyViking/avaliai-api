const controller = require("../controllers/contadores");

module.exports = function (app) {
  app.get("/dados_checklist/:id_check", controller.DadosDoChecklist);

  app.get("/dados_categoria/:id", controller.DadosDaCategoria);
};
