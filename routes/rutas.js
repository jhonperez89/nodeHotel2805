import express from "express";

//importo el controlador de habitaciones
import { ControladorHabitacion } from "../Controllers/ControladorHabitacion.js";
//creo un objeto de la clase controladorHabitacion
let controladorHabitacion = new ControladorHabitacion()

//Utlizo el metodo router() de express

export let rutas = express.Router()

// Lista de servicios que ofrece el api

rutas.get('/api/v1/habitacion', controladorHabitacion.buscarTodas)

rutas.get('/api/v1/habitacion/:id', controladorHabitacion.buscarPorId)

rutas.post('/api/v1/habitacion', controladorHabitacion.registrar)

rutas.put('/api/v1/habitacion/:id', controladorHabitacion.editar)

rutas.delete('/api/v1/habitacion/:id', controladorHabitacion.eliminar )