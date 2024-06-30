import { createPool } from 'mysql'

export const db = createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lockersutp',
})