function render(checklist){
    return {
        id: checklist._id,
        nome: checklist.nome,
        descricao: checklist.descricao,
        num_heu: checklist.num_heu,
        num_itens: checklist.num_itens,
        num_cat: checklist.num_cat
    }
}

function renderMany(checklists){
    return checklists.map(render);
}

module.exports.render = render;
module.exports.renderMany = renderMany;
