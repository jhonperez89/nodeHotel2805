import mongoose  from "mongoose";
//esquema
const Schema = mongoose.Schema; //esquema de datos (que datos tiene mi modelo)

//creo mi propio esquema de datos
const Reservas = new Schema({
    idHabitacion:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    
    telefono:{
        type:String,
        required:true
    },
    fechaInicio:{
        type:String,
        required:true
    },

    fechaFinal:{
        type:String,
        required:true
    },
    cantidadPersonas:{
        type:Number,
        required:true
    },
    Costo:{
        type:Number,
        required:false
    }

    
        
})

// se envia el modelo de datos
export const modeloReserva = mongoose.model('Reservasiones ', Reservas );