const pgPromise = require ('pg-promise')

const config = {

host : 'motty.db.elephantsql.com',
port : '5432',
database: 'zppyrbty',
user:'zppyrbty',
password: '3Uug-ejyILUZ0VnC7rAuJ-WcYrVzg37t',
ssl: {
    rejectUnauthorized: false, 
  },
  
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db;

