const mongoose =  require('mongoose');
module.exports = function(){
    const schema = mongoose.Schema({
        pergunta: {
            type: String,
            required: true
        }, 
        heuristica: {
            type: String,
            required: true,
            ref: 'Heuristica'
        },
    });

    return mongoose.model('itemDeVerificacao', schema);
    
}();