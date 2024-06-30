import usuarioService from "../services/usuarioService.js"

function obtenerUsuarioPorID(req, res) {
	const {
		params: { usuarioID },
	} = req

	if (!usuarioID) return

	usuarioService
		.obtenerUsuarioPorID(usuarioID)
		.then((usuario) => {
			res.send({ status: 'OK', data: usuario })
		})
		.catch((err) => {
			res.send({ status: 'ERROR', data: err })
		})
}

function verificarCredenciales(req, res) {
	const {
		params: { usuario, clave },
	} = req

	if (!usuario || !clave) return

	usuarioService
		.verificarCredenciales(usuario, clave)
		.then((usuarioID) => {
			res.send({ status: 'OK', data: usuarioID })
		})
		.catch((err) => {
			res.send({ status: 'ERROR', data: err })
		})
}

export default {
	obtenerUsuarioPorID,
	verificarCredenciales
}
