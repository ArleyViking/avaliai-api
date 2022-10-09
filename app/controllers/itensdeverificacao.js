const itemDeVerificacao = require("../models/itemDeVerificacao");

module.exports.inserirItens = function (req, res) {
  let item = req.body;

  let promise = itemDeVerificacao.create(item);
  promise
    .then(function (item) {
      res.status(201).json(item);
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "Sua requisição falhou" });
    });
};

module.exports.buscarItens = function (req, res) {
  let promise = itemDeVerificacao.find().populate("heuristica");
  promise
    .then(function (itens) {
      res.status(201).json(itens);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "Sua requisição falhou" });
    });
};

module.exports.buscarItensPorheuristica = async function (req, res) {
  let { heuristica } = req.params;
  try {
    let promise = itemDeVerificacao.find({ heuristica }).populate("heuristica");

    const itens = await promise;
    const count = await promise.count();
    res.status(201).json({ itens, count });
  } catch {
    res.status(500).json({ mensagem: "Sua requisição falhou" });
  }
};
