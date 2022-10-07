const controller = require("../controllers/categorias")

module.exports = function(app){
   app.post("/categorias", controller.inserirCategoria);
   app.get("/categorias", controller.buscarCategoria);
   app.get("/categoria/:id_check", controller.buscarCategoriaPorChecklist);
}
