import { Router } from "express"
import usuarioController from "../controllers/usuarioController.js"

const usuarioRouter = Router()

usuarioRouter
	.get('/buscar/:usuario', usuarioController.buscarUsuario)
	.get('/:usuarioID', usuarioController.obtenerUsuarioPorID)
	.get('/:usuario/:clave', usuarioController.verificarCredenciales)
	.post('/:usuario/:clave/:nombre_completo/:sexo/:tipo/:cedula/:correo/:telefono', usuarioController.crearNuevoUsuario)

export default usuarioRouter