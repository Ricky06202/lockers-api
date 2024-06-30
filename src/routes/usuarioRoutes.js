import { Router } from "express"
import usuarioController from "../controllers/usuarioController.js"

const usuarioRouter = Router()

usuarioRouter
	.get('/:usuarioID', usuarioController.obtenerUsuarioPorID)
	.get('/:usuario/:clave', usuarioController.verificarCredenciales)

export default usuarioRouter