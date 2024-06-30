import { Router } from "express";
import alquilerController from "../controllers/alquilerController.js";


const alquilerRoutes = Router()

alquilerRoutes
	.post('/:usuarioID/:lockerID/:fecha_final', alquilerController.crearAlquiler)

export default alquilerRoutes