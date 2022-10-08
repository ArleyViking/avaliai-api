const mongoose =  require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        num_itens: {
            type: String,
            required: true
        },
        categoria: {
            type: mongoose.Schema.ObjectId,
            ref: 'Categoria'
        },
        checklist: {
            type: mongoose.Schema.ObjectId,
            ref: 'Checklist'
        },
        fonte: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Heuristica', schema);
    
}();