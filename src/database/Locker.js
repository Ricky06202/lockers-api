import { db } from "./Conexion.js"

const obtenerTodosLosLockers = () => {
	return new Promise((resolve, reject) => {
		db.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			SELECT l.id_locker, l.nombre_locker, l.clave, d.estado, s.nombre_sector, s.descripcion 
			FROM locker as l 
			JOIN disponible as d on l.id_disponible = d.id_disponible 
			JOIN sector as s on l.id_sector = s.id_sector
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

const obtenerUnLocker = (lockerID) => {
	return new Promise((resolve, reject) => {
		db.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			SELECT l.id_locker, l.nombre_locker, l.clave, d.estado, s.nombre_sector, s.descripcion 
			FROM locker as l 
			JOIN disponible as d on l.id_disponible = d.id_disponible 
			JOIN sector as s on l.id_sector = s.id_sector
			WHERE l.id_locker = ${lockerID}
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
	obtenerTodosLosLockers,
	obtenerUnLocker
 }
