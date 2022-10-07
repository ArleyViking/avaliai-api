const mongoose =  require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        num_heu: {
            type: String,
            required: true
        },
        num_itens: {
            type: String,
            required: true
        },
        id_check: {
            type: mongoose.Schema.ObjectId,
            ref: 'Checklist'
        },
        
    });

    return mongoose.model('Categoria', schema);
    
}();