let heuristicas = [
    {id: 1, nome:  "victor", sobrenome: "farias"},
    {id: 2,nome:  "joao", sobrenome: "2"},
    {id: 3,nome:  "joao", sobrenome: "8"}
];

module.exports.listarHeuristicas = function(req, res){
    let heuristicas_retorno = heuristicas;
    if(req.query.nome){
        let nome= req.query.nome;
        heuristicas_retorno = heuristicas_retorno.filter(function(heuristica){return heuristica.nome == nome});
    }
    res.json(heuristicas_retorno);
}

module.exports.heuristicaPorid = function(req,res){
    let id = req.params.id;
    let heuristica  = heuristicas.find(function(heuristica){return heuristica.id == id;});
   
    if(heuristica){
        res.json(heuristica);
    }else{
        res.json({mensagem: "heuristica não encontrada"}).status(404);
    }
}

module.exports.inserirHeuristica = function(req, res){
    let heuristica = req.body;
    heuristicas.push(heuristica);
    res.json(heuristica);
}

module.exports.inserirHeuristica = function(req, res){
    heuristicas
}