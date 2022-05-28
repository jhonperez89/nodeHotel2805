//Importar  mongose
import mongoose from 'mongoose';

export async function conectarConBD(){
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('EXITO CONECTANDOME A LA BASE DE DATOS')
    } catch (error) {
        console.log('ups.. '+ error);
    }
        
}