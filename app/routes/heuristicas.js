const controller = require("../controllers/heuristicas")

module.exports = function(app){
   app.get("/heuristicas", controller.listarHeuristicas);
   app.get("/heuristicas/:id", controller.heuristicaPorid);

   app.post("/heuristicas", controller.inserirHeuristica);
}
