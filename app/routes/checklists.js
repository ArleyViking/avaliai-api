const controller = require("../controllers/checklists");

module.exports = function (app) {
  app.post("/checklists", controller.inserirChecklist);
  app.get("/checklists", controller.buscarChecklists);
  app.get("/checklist/:id", controller.buscarChecklistPorId);
  app.get("/dash", controller.buscarTodosOsDados);
  app.delete("/checklist/:id", controller.deletarChecklistPorId);
  //app.get("/itensbytext/:text", controller.searchByText);
};
