
const Checklist = require("../models/checklists")
const view = require("../views/checklists");


module.exports.inserirChecklist = function(req, res){
    let checklist = req.body;
    
    let promise = Checklist.create(checklist);
    
    promise.then(function(checklist){
        res.status(201).json(view.render(checklist));
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição falhou"});
    
    })
}

module.exports.buscarChecklists = function(req, res){
 let promise = Checklist.find();
    promise.then(function(checklists){
        res.status(201).json(view.renderMany(checklists));
    }).catch(function(error){
        res.status(500).json({mensagem: "Sua requisição falhou"});
    })
}

module.exports.buscarChecklistPorId = function(req, res){
    let id = req.params.id;
    let promise = Checklist.findById(id);
       promise.then(function(checklist){
           res.status(201).json(view.render(checklist));
       }).catch(function(error){
           res.status(500).json({mensagem: "Sua requisição falhou"});
       })
   }
   
module.exports.deletarChecklistPorId = function(req, res){
    let id = req.params.id;
    let promise = Checklist.findByIdAndDelete(id);
       promise.then(function(checklist){
           res.status(201).json(view.render(checklist));
       }).catch(function(error){
           res.status(500).json({mensagem: "Sua requisição falhou"});
       })
}

