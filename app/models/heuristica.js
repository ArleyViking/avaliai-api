import itemDeVerificacao from './itemDeVerificacao';
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
        itens: {
            type: [itemDeVerificacao],
            required: true
        }
    });

    return mongoose.model('Heuristica', schema);
    
}