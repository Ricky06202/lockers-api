import lockerService from '../services/lockerService'

const obtenerTodosLosLockers = (req, res) => {
	lockerService
		.obtenerTodosLosLockers()
		.then((todosLosLockers) => {
			res.send({ status: 'OK', data: todosLosLockers })
		})
		.catch((err) => {
			res.send({ status: 'ERROR', data: err })
		})
}

const obtenerUnLocker = (req, res) => {
	const {
		params: { lockerID },
	} = req

	if (!lockerID) return

	lockerService
		.obtenerUnLocker(lockerID)
		.then((locker) => {
			res.send({ status: 'OK', data: locker })
		})
		.catch((err) => {
			res.send({ status: 'ERROR', data: err })
		})
}

const actualizarUnLocker = (req, res) => {
	const {
		params: { lockerID },
	} = req

	if (!lockerID) return

	lockerService
		.actualizarUnLocker(lockerID)
		.then((locker) => {
			res.send({ status: 'OK', data: locker })
		})
		.catch((err) => {
			res.send({ status: 'ERROR', data: err })
		})
}

module.exports = {
	obtenerTodosLosLockers,
	obtenerUnLocker,
	crearNuevoLocker,
	actualizarUnLocker,
	borrarUnLocker,
}
