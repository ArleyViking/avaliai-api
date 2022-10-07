const controller = require("../controllers/checklists")

module.exports = function(app){
   app.post("/checklists", controller.inserirChecklist);
   app.get("/checklists", controller.buscarChecklists);
   app.get("/checklist/:id", controller.buscarChecklistPorId);
   app.delete("/checklist/:id", controller.deletarChecklistPorId);
}
