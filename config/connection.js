const pgPromise = require ('pg-promise')

const config = {

host : 'ec2-52-54-212-232.compute-1.amazonaws.com',
port : '5432',
database: 'd4e2f1o7be6ake',
user:'fktfwqvtruhass',
password: 'b66c50fcd86119639dd8fef2e27cb0eb03d4dfa66f7be6b0a85b43a1d6762432',
ssl: {
    rejectUnauthorized: false, 
  },
  
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db;

