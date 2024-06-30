import express from "express"
import lockersRouter from './routes/lockerRoutes.js'
import usuarioRouter from './routes/usuarioRoutes.js'
import alquilerRoutes from './routes/alquilerRoutes.js'

const app = express()
const port = process.env.port || 3000

app
	.use('/api/lockers', lockersRouter)
	.use('/api/usuario', usuarioRouter)
	.use('/api/alquiler', alquilerRoutes)

app.listen(port, () => {console.log(`escuchando en el puerto ${port}`)})