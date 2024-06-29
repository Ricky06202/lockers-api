import lockers from '../database/Locker';

const obtenerTodosLosLockers = () => {
	const todosLosLockers = lockers.obtenerTodosLosLockers()
	return todosLosLockers
}
const obtenerUnLocker = (lockerID) => {
	const locker = lockers.obtenerUnLocker(lockerID)
	return locker
}
const actualizarUnLocker = (lockerID) => {
	return
}


module.exports = {
	obtenerTodosLosLockers,
	obtenerUnLocker,
	actualizarUnLocker,
}