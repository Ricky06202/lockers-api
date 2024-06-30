import { Router } from 'express';
import lockerController from '../controllers/lockerController.js';

const router = Router()

router
	.get('/', lockerController.obtenerTodosLosLockers)
	.get('/:lockerID', lockerController.obtenerUnLocker)
	.patch('/:lockerID', lockerController.actualizarUnLocker)

export default router