const express = require('express')
const lockersRouter = require('./routes/lockerRoutes');
const usuarioRouter = require('./routes/usuarioRoutes');

const app = express()
const port = process.env.port || 3000

app
	.use('/api/lockers', lockersRouter)
	.use('/api/usuario', usuarioRouter)

app.listen(port, () => {console.log(`escuchando en el puerto ${port}`)})