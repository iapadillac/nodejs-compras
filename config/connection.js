const pgPromise = require ('pg-promise')
import {DB_HOST,
DB_NAME,
DB_PASSWORD,
DB_PORT,
DB_USER} from './config.js'
const config = {

host : DB_HOST,
port : DB_PORT,
database: DB_NAME,
user:DB_USER,
password: DB_PASSWORD,
/**ssl: {
    rejectUnauthorized: false, 
  },
  **/
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db;

