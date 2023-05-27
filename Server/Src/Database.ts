import keys from './Keys';
const sql = require('mssql')

const pool = new sql.ConnectionPool(keys.database);
pool.connect((err: Error) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err)
    } else {
        console.log('Conectado a la base de datos')
    }
})
export default pool

/*
https://www.npmjs.com/package/mssql
https://stackoverflow.com/questions/49185969/connectionerror-failed-to-connect-to-localhostundefined-in-15000ms?noredirect=1&lq=1
https://www.youtube.com/watch?v=hrijeTjTHnE
*/