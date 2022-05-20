const { Schema, model } = require('mongoose');

const CargaSchema = Schema({
//TODO cambiar model de event a carga para que tenga
// ruc,nombre,celular,tonelaje,ticket,placa,mineral,start,end
    ruc: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required:true
    },
    celular:{
        type:String,
        requerid:true
    },
    ticket:{
        type:String,
    },
    pesoBruto:{
        type:Number,
    },
    tara:{
        type:Number
    },
    tonelaje:{
        type:Number
    },
    mineral:{
        type:String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

    CargaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Carga', CargaSchema );

