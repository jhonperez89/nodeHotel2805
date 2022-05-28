// controlador
//1. recibir peticiones
//2. ejecutar logica de negocio
// 3. llamar a la capa de servicios
// 4. enviar las respuestas al cliente

import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion {
    
    constructor(){}

   async buscarTodas(request, response){

       let servicioHabitacion = new ServicioHabitacion()

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos',
                data: await servicioHabitacion.buscarTodas(),
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos'+ error,
                data: [],
                estado:false
            })
        }
            
    }


    async buscarPorId(request, response){

        let servicioHabitacion = new ServicioHabitacion()

         let id = request.params.id
        console.log(id)

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos'+ id,
                data: await servicioHabitacion.buscarPorId(id),
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos'+ error,
                data: [],
                estado:false
            })
        }
    }

    async registrar(request, response){

        let servicioHabitacion = new ServicioHabitacion()

        let datosPeticion=request.body

        try {

            await servicioHabitacion.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "exito agregando la habitacion",
                data: null,
                estado : true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "fallamos agregando habitacion",
                data: [],
                estado : false
            })   
        }
    }

    async editar(request, response){

        let servicioHabitacion = new ServicioHabitacion()

        let id = request.params.id
        let datosPeticion = request.body

        try {
            await servicioHabitacion.editar(id, datosPeticion)
            response.status(200).json({
                mensaje: "exito editando la habitacion",
                data: null,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos editando habitacion",
                data: [],
                estado : false

            })

        }
    }

    async eliminar(request, response){

        let servicioHabitacion = new ServicioHabitacion()

        let id = request.params.id
        
        try {

            await servicioHabitacion.eliminar(id)

            response.status(200).json({
                mensaje: "exito eliminando la habitacion",
                data:null,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos eliminando habitacion",
                data: [],
                estado : false

            })

        }

    }

}