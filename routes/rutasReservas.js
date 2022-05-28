import express from "express";

//importo el controlador de habitaciones
import { ControladorReserva  } from "../Controllers/ControladorReserva.js";
//creo un objeto de la clase controladorHabitacion
let controladorReserva = new ControladorReserva()

//Utlizo el metodo router() de express

export let rutasReservas = express.Router()

// Lista de servicios que ofrece el api



rutasReservas.get('/api/v1/reserva/:id', controladorReserva.buscarPorId)

rutasReservas.post('/api/v1/reserva', controladorReserva.registrar)

rutasReservas.put('/api/v1/reserva/:id', controladorReserva.editar)

rutasReservas.delete('/api/v1/reserva/:id', controladorReserva.eliminar )