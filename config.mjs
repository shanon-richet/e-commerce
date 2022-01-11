import pg from 'pg'

const { Pool } = pg

const config = ({
    user: 'shanon', // Your newly created user
    host: 'localhost',
    database: 'ecommerce', // Your newly created database
    password: 'shanon', // Your newly created password
    port: 5432,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const pool = new Pool(config);
pool.connect();

pool.query('SELECT * FROM users ORDER BY id ASC;', (error, results) => {
    if (error) {
        throw error
    }
    console.log(results.rows)
})

export default pool