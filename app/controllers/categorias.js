
const Categoria = require("../models/categorias")
const view = require("../views/categorias")


module.exports.inserirCategoria = function(req, res){
    let categoria = req.body;

    let promise = Categoria.create(categoria);
    promise.then(function(categoria){
        res.status(201).json(categoria);
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição falhou"});
    
    })
}

module.exports.buscarCategoria = function(req, res){
    let promise = Categoria.find().populate('id_check');
       promise.then(function(categorias){
           res.status(201).json(view.renderMany(categorias));
       }).catch(function(error){
           res.status(500).json({mensagem: "Sua requisição falhou"});
       })
   }

module.exports.buscarCategoriaPorChecklist = function(req, res){
    let {id_check} = req.params;

    let promise = Categoria.find({id_check}).populate('id_check');
       promise.then(function(categorias){
           res.status(201).json(view.renderMany(categorias));
       }).catch(function(error){
           res.status(500).json({mensagem: "Sua requisição falhou", error});
       })
   }