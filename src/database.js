import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-3-215-57-87.compute-1.amazonaws.com',
    user: 'achqbvyuglydhz',
    password: '0ad16030b3611352d77726d66a41f08b6ed4aab827e1797758c33973740fff57',
    database: 'dab4fih0v882ck',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})