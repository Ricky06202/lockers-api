import lockers from '../database/Locker.js';

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


export default {
	obtenerTodosLosLockers,
	obtenerUnLocker,
	actualizarUnLocker,
}