import lockersUTP from "../database/LockersUTP.js"

const obtenerUsuarioPorID = (usuarioID) => {
	return new Promise((resolve, reject) => {
		lockersUTP.getConnection((err, connection) => {
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
		lockersUTP.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			SELECT id_usuario
			FROM usuario
			WHERE nombre_usuario = '${usuario}'
			AND contraseña = '${clave}'
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

const crearNuevoUsuario = (usuario, clave, nombre_completo, sexo, tipo, cedula, correo, telefono) => {
	return new Promise((resolve, reject) => {
		lockersUTP.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			INSERT INTO usuario (nombre_usuario, nombre_completo, cédula_usuario, id_sexo, id_tipoUsuario, correo_usuario, telefono_usuario, contraseña) 
			VALUES ('${usuario}', '${nombre_completo}', '${cedula}', (SELECT sexo.id_sexo FROM sexo WHERE sexo.descripSexo like '${sexo}'), (SELECT tipousuario.id_tipoUsuario FROM tipousuario WHERE tipousuario.descripUsuario like '${tipo}'), '${correo}', '${telefono}', '${clave}')
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

const buscarUsuario = (usuario) => {
	return new Promise((resolve, reject) => {
		lockersUTP.getConnection((err, connection) => {
			if (err) {
				reject(err)
				return
			}

			const query = `
			SELECT id_usuario
			FROM usuario
			WHERE nombre_usuario = '${usuario}'
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

export default{
	obtenerUsuarioPorID,
	verificarCredenciales,
	crearNuevoUsuario,
	buscarUsuario,
}