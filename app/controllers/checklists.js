const Checklist = require("../models/checklists");
const Categoria = require("../models/categorias");
const Heuristica = require("../models/heuristica");
const Itens = require("../models/itemDeVerificacao");

const view = require("../views/checklists");

module.exports.inserirChecklist = function (req, res) {
  let checklist = req.body;

  let promise = Checklist.create(checklist);

  promise
    .then(function (checklist) {
      res.status(201).json(view.render(checklist));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "Sua requisição falhou" });
    });
};

module.exports.buscarChecklists = function (req, res) {
  let promise = Checklist.find();
  promise
    .then(function (checklists) {
      res.status(201).json(view.renderMany(checklists));
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "Sua requisição falhou" });
    });
};

module.exports.buscarChecklistPorId = function (req, res) {
  let id = req.params.id;
  let promise = Checklist.findById(id);
  promise
    .then(function (checklist) {
      res.status(201).json(view.render(checklist));
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "Sua requisição falhou" });
    });
};

module.exports.deletarChecklistPorId = function (req, res) {
  let id = req.params.id;
  let promise = Checklist.findByIdAndDelete(id);
  promise
    .then(function (checklist) {
      res.status(201).json(view.render(checklist));
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "Sua requisição falhou" });
    });
};

module.exports.buscarTodosOsDados = function (req, res) {
  let checklists = Checklist.find().count();
  let categorias = Categoria.find().count();

  Promise.all([checklists, categorias, itens]).then(function (responses) {
    const [checklists, categorias] = responses;

    res.status(200).json([
      { nome: "Checklists montados", quant: checklists },
      { nome: "Categorias", quant: categorias },
      { nome: "Heurísticas de design", quant: 142 },
      { nome: "Itens de verificação", quant: +970 },
    ]);
  });
};
