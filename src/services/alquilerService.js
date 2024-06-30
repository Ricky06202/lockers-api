import lockersUTP from "../database/LockersUTP.js";

const crearAlquiler = (usuarioID, lockerID, fecha_final) => {
	return new Promise((resolve, reject) => {
		lockersUTP.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const hoy = new Date().toLocaleDateString().split('/')
			const final = new Date(fecha_final).toLocaleDateString().split("/")
			
			const fechaActual = `${hoy[2]}/${hoy[1]}/${hoy[0]}`
			const fechaFinal = `${final[2]}/${final[1]}/${final[0]}`

			const query = `
			insert into alquiler (id_usuario, id_locker, fecha_inic, fecha_final)
			values (${usuarioID}, ${lockerID}, "${fechaActual}", "${fechaFinal}")
			`

			connection.query(query, (err, results) => {
				connection.release() // Release the connection back to the pool
				if (err) {
					reject(err)
				} else {
					resolve(results)
				}
			})
		})
	})
}

export default {
	crearAlquiler,
}