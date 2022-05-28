import mongoose  from "mongoose";
//esquema
const Schema = mongoose.Schema; //esquema de datos (que datos tiene mi modelo)

//creo mi propio esquema de datos
const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true
    },
    capacidad:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    }
        
})

// se envia el modelo de datos
export const modeloHabitacion = mongoose.model('Habitaciones: ', Habitacion );