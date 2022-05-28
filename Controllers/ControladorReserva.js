
import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion, ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorReserva {
    
    constructor(){}

    async buscarPorId(request, response){

        let servicioReserva = new ServicioReserva()

        
        let id = request.params.id
        console.log(id)

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos de reserva'+ id,
                data: await servicioReserva.buscarPorId(id),
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos de reserva'+ error,
                data: [],
                estado:false
            })
        }
    }
    



   async registrar(request, response){

        let servicioReserva = new ServicioReserva()
        let servicioHabitacion = new ServicioHabitacion()

        let datosPeticion=request.body //datos de la reserva

        try {
            //consultar cuanto vale por noche 1 habitacion
            let habitacionConsultar = await servicioHabitacion.buscarPorId(datosPeticion.idHabitacion)
            let precioNoche = habitacionConsultar.precioNoche

            //fecha salida
            let fechaSalida = datosPeticion.fechaFinal

            //fecha entrada
            let fechaEntrada = datosPeticion.fechaInicio

            //restar las fechas (entrada - salida)
            let diasTotales = fechaEntrada - fechaSalida

            //costo total de la reserva
            let costo = diasTotales * precioNoche

            datosPeticion.costo=costo

            
            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "exito agregando la reserva",
                data: null,
                estado : true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "fallamos agregando la reserva", error,
                data: [],
                estado : false
            })   
        }
    }

    async editar(request, response){
        let servicioReserva = new ServicioReserva()
        let id = request.params.id
        let datosPeticion = request.body

        try {
            await servicioReserva.editar(id, datosPeticion)

            response.status(200).json({
                mensaje: "exito editando la reserva",
                data: null,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos editando reserva",
                data: [],
                estado : false

            })

        }
    }

    async eliminar(request, response){

        let servicioReserva = new ServicioReserva()

        let id = request.params.id
        
        try {

            await servicioReserva.eliminar(id)

            response.status(200).json({
                mensaje: "exito eliminando la reserva",
                data:null,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos eliminando la reserva ",
                data: [],
                estado : false

            })

        }

    }

}