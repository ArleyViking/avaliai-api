const controller = require("../controllers/heuristicas")

module.exports = function(app){
   app.post("/heuristica", controller.inserirHeuristica);
   app.get("/heuristica", controller.buscarHeuristica);
}
