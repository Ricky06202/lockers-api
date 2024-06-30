import alquilerService from "../services/alquilerService.js";

function crearAlquiler(req, res) {
	const {
		params: { usuarioID, lockerID, fecha_final },
	} = req

	alquilerService
		.crearAlquiler(usuarioID, lockerID, fecha_final)
		.then((alquiler) => {
			res.send({ status: 'OK', data: alquiler })
		})
		.catch((err) => {
			res.send({ status: 'ERROR', data: err })
		})
}

export default {
	crearAlquiler
}