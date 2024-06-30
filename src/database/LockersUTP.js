import { createPool } from 'mysql'

const lockersUTP = createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lockersutp',
})

export default lockersUTP