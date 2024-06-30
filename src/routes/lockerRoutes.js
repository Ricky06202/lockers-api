import { Router } from 'express';
import lockerController from '../controllers/lockerController.js';

const lockersRouter = Router()

lockersRouter
	.get('/', lockerController.obtenerTodosLosLockers)
	.get('/:lockerID', lockerController.obtenerUnLocker)
	.patch('/:lockerID/:disponibilidadID', lockerController.actualizarUnLocker)

export default lockersRouter