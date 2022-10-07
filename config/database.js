var mongoose = require('mongoose');

module.exports = function(uri){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('connected', function(){
        console.log("mongoose conectado em " + uri);
    });
    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose desconectado de" + uri);
    });
    mongoose.connection.on('error', function(erro){
        console.log("Mongoose erro:" + erro);
    });

    mongoose.set('debug', true);
}