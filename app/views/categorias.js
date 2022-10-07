function render(categoria){
    return {
        id: categoria._id,
        nome: categoria.nome,
        num_heu: categoria.num_heu,
        num_itens: categoria.num_itens,
        id_check: categoria.id_check
    }
}

function renderMany(categorias){
    return categorias.map(render);
}

module.exports.render = render;
module.exports.renderMany = renderMany;
