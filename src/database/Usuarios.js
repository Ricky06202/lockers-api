const mysql = require('mysql')

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lockersutp',
})

const obtenerUsuarioPorID = (usuarioID) => {
	return new Promise((resolve, reject) => {
		db.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			SELECT u.id_usuario, u.nombre_usuario, u.nombre_completo, u.cédula_usuario, s.descripSexo, t.descripUsuario, u.correo_usuario, u.telefono_usuario 
			FROM usuario u
			JOIN sexo s on u.id_sexo = s.id_sexo
			JOIN tipousuario t on u.id_tipoUsuario = t.id_tipoUsuario
			WHERE u.id_usuario = ${usuarioID}
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

const verificarCredenciales = (usuario, clave) => {
	return new Promise((resolve, reject) => {
		db.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			SELECT id_usuario
			FROM usuario
			WHERE nombre_usuario = ${usuario}
			AND contraseña = ${clave}
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

module.exports = {
	obtenerUsuarioPorID,
	verificarCredenciales
}