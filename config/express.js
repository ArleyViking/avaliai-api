const bodyParser = require('body-parser');
const express = require('express');
const routeHeuristicas = require("../app/routes/heuristicas")
const routeChecklists = require("../app/routes/checklists")
const routeCategorias = require("../app/routes/categorias")

module.exports = function(){
    let app = express();

    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));
    routeCategorias(app);
    routeHeuristicas(app);
    
    routeChecklists(app);
    return app;
};