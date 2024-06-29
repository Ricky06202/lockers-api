import { Router } from 'express';
import {obtenerTodosLosLockers, obtenerUnLocker, actualizarUnLocker} from '../controllers/lockerController';

const router = Router()

router
	.get('/', obtenerTodosLosLockers)
	.get('/:lockerID', obtenerUnLocker)
	.patch('/:lockerID', actualizarUnLocker)

	module.exports = router