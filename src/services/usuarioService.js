import usuarios from "../database/Usuarios.js"

function obtenerUsuarioPorID(usuarioID){
	const usuario = usuarios.obtenerUsuarioPorID(usuarioID)
	return usuario
}

function verificarCredenciales(usuario, clave){
	const usuarioEncontrado = usuarios.verificarCredenciales(usuario,clave)
	return usuarioEncontrado
}

export default{
	obtenerUsuarioPorID,
	verificarCredenciales,
}