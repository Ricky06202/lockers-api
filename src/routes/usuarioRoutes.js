import { Router } from "express"
import usuarioController from "../controllers/usuarioController.js"

const router = Router()

router
	// .get('/:usuarioID', usuarioController.obtenerUsuarioPorID)
	.get('/:usuario/:clave', usuarioController.verificarCredenciales)

export default router