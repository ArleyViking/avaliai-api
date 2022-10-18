const Categoria = require("../models/categorias");
const Heuristica = require("../models/heuristica");
const Item = require("../models/itemDeVerificacao");

// Por checklist
module.exports.DadosDoChecklist = function (req, res) {
  let { id_check } = req.params;
  let categorias = Categoria.find({ id_check }).count();
  let heuristicas = Heuristica.find({ checklist: id_check });
  let heuristicas_count = Heuristica.find({ checklist: id_check }).count();

  Promise.all([categorias, heuristicas, heuristicas_count])
    .then(function (responses) {
      const [categorias, heuristicas, heuristicas_count] = responses;
      let num_itens = heuristicas.reduce(
        (acc, heuristica) => acc + Number(heuristica.num_itens),
        0
      );
      res.status(200).json([
        { nome: "Categorias", quant: categorias },
        { nome: "Heuristicas no total", quant: heuristicas_count },
        { nome: "Itens de verificação no total", quant: num_itens },
      ]);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "Sua requisição falhou", error });
    });
};

// Por categoria

module.exports.DadosDaCategoria = function (req, res) {
  let { id } = req.params;
  let heuristicas_count = Heuristica.find({ categoria: id }).count();
  let heuristicas = Heuristica.find({ categoria: id });

  Promise.all([heuristicas_count, heuristicas])
    .then(function (responses) {
      const [heuristicas_count, Heuristicas] = responses;
      let num_itens = Heuristicas.reduce(
        (acc, heuristica) => acc + Number(heuristica.num_itens),
        0
      );
      res.status(200).json([
        { nome: "Heuristicas no total", quant: heuristicas_count },
        { nome: "Itens de verificação no total", quant: num_itens },
      ]);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "Sua requisição falhou", error });
    });
};
