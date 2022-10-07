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
        num_heu: {
            type: String,
            required: true
        },
        num_itens: {
            type: String,
            required: true
        },
        num_cat: {
            type: String,
            required: true
        },
        
    });

    return mongoose.model('Checklist', schema);
    
}();