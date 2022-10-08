
const Heuristica = require("../models/heuristica")


module.exports.inserirHeuristica = function (req, res) {
    let heuristica = req.body;

    let promise = Heuristica.create(heuristica);
    promise.then(function (heuristica) {
        res.status(201).json(heuristica);
    }).catch(function (error) {
        res.status(400).json({ mensagem: "Sua requisição falhou" });

    })
}

module.exports.buscarHeuristica = function (req, res) {
    let promise = Heuristica.find().populate('checklist').populate('categoria');
    promise.then(function (heuristicas) {
        res.status(201).json(heuristicas);
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Sua requisição falhou" });
    })
}
